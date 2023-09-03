import React, { useContext, useEffect, useState } from 'react';
import { Member } from '../core/entities/member';
import { MEMBERS } from '../core/members.const';
import { useRouter } from 'next/router';
import PAGES from '../pages.conts';
import { DraftedPlayersContext } from '../core/react/draft/drafted-player-context';

const Draft: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const router = useRouter()
  const draftContext = useContext(DraftedPlayersContext)
  if (!draftContext) {
    return router.push(PAGES.HOME.path)
  }
  const handleDraft = (member: Member) => {
    const success = draftContext.draftMember(`player-${currentPlayer}`, member);
    if (success) {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
    
    if (MEMBERS.length === 0) {
      router.push(PAGES.GAME.path)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Drafting Phase</h1>
      <p className="text-xl mb-4">Current Player: Player {currentPlayer}</p>
      <div className="grid grid-cols-2 gap-4">
        {MEMBERS.map((member) => (
          <button
            key={member.name}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => handleDraft(member)}
          >
            {member.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Draft;