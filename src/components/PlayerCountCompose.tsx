import React, { useContext, useState } from 'react';
import PlayerCountModal from './ui/PlayerCountModal';
import { useRouter } from 'next/router';
import PAGES from '../pages.conts';
import { Member } from '../core/entities/member';
import { MEMBERS } from '../core/members.const';
import { DraftedPlayersContext } from '../core/react/draft/drafted-player-context';



export const PlayerCountCompose: React.FC = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState<number>(2);

  const handlePlayerSelect = (count: number) => {
    setPlayerCount(count);
    setIsModalOpen(false);

    router.push(PAGES.DRAFT.path)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Game!</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-4" onClick={() => setIsModalOpen(true)}>
          Start Game
        </button>

      {playerCount && <p className="text-lg">Number of Players: {playerCount}</p>}

      <PlayerCountModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handlePlayerSelect}
      />
    </div>
  );
}

