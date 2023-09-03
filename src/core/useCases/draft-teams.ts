import { Member } from "../entities/member";

export type Player = {
  id: string;
  draftedMembers: Member[];
};

export class DraftTeamsUseCase {
  players: Player[];
  draftableMembers: Member[];
  maxDraftPerPlayer: number;

  constructor(numberOfPlayers: number = 2, draftableMembers: Member[]) {
    this.players = Array.from({ length: numberOfPlayers }, (_, i) => ({
      id: `player-${i + 1}`,
      draftedMembers: [],
    }));
    this.draftableMembers = draftableMembers;

    const draftLimits: Record<number, number> = {
      2: 4,
      4: 3,
      6: 2
    };

    this.maxDraftPerPlayer = draftLimits[numberOfPlayers];
   
    if (!this.maxDraftPerPlayer) {
      throw new Error("Invalid number of players");
    }
  }

  draftMember(playerId: string, member: Member): boolean {
    const player = this.players.find(p => p.id === playerId);
    const memberIndex = this.draftableMembers.indexOf(member);

    if (
      player &&
      memberIndex !== -1 &&
      player.draftedMembers.length < this.maxDraftPerPlayer
    ) {
      player.draftedMembers.push(member);
      this.draftableMembers.splice(memberIndex, 1);
      return true;
    }
    return false;
  }
}