import { Board } from "../entities/board.";
import { Team } from "../entities/team";


type Teams = Team[]

export class StartGameUseCase {
  board: Board;
  teams: Teams = [];

  constructor(teams: Teams) {
    this.board = new Board();

    for (const team of teams) {
      this.teams.push(team);
      for (const member of team.members) {
        if (!this.board.placeMember(member, member.coords.x, member.coords.y)) {
          throw new Error(`Failed to place member of ${team.id} at coordinates (${member.coords.x}, ${member.coords.y})`);
        }
      }
    }
  }
}