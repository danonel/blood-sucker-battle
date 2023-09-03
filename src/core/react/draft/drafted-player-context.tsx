import React from 'react';
import { Member } from '../../entities/member';
import { Player } from '../../useCases/draft-teams';



export interface DraftedPlayersContextProps {
  draftMember: (teamId: string, member: Member) => boolean;
  isDraftOver: boolean;
  players: Player[]
}

export const DraftedPlayersContext = React.createContext<DraftedPlayersContextProps | undefined>(undefined);

