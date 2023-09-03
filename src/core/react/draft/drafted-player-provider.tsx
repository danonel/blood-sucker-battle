import { ReactNode, useCallback, useMemo, useState } from "react";
import { DraftedPlayersContext } from './drafted-player-context'
import { MEMBERS } from "../../members.const";
import { DraftTeamsUseCase } from "../../useCases/draft-teams";
import { Member } from "../../entities/member";

const LOCAL_STORAGE_KEY = 'draftedPlayers';

interface DraftProvider {
  children: ReactNode
}
export const DraftProvider = ({ children }: DraftProvider) => {
  const draft = useMemo(() => new DraftTeamsUseCase(2, MEMBERS), [])
  const [draftCount, setDraftCount] = useState(1)
  const [players, setPlayers] = useState(draft.players);
  const [isDraftOver, setIsDraftOver] = useState(false)

  const draftMember = useCallback((teamId: string, member: Member) => {
    setDraftCount(prev => {
      if (prev === draft.maxDraftPerPlayer) {
        setIsDraftOver(true)
      }
      return prev + 1
    })
    
    const success = draft.draftMember(teamId, member);
    if (success) {
      setPlayers(draft.players)
    }
    return success;
  }, [draft]);

  return (
    <DraftedPlayersContext.Provider value={{ isDraftOver, draftMember, players }}>
      {children}
    </DraftedPlayersContext.Provider>
  );

};

