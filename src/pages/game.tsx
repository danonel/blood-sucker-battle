import React, { useContext, useEffect, useState } from 'react';
import { Board } from '../core/entities/board.';
import { Member } from '../core/entities/member';
import MemberTile from '../components/MemberTile';
import { rollD12, rollD8 } from '../core/useCases/roll-dice';
import { DraftedPlayersContext, DraftedPlayersContextProps } from '../core/react/draft/drafted-player-context';
const LOCAL_STORAGE_KEY = 'draftedPlayers';

const Game: React.FC = () => {
  const draftContext = useContext(DraftedPlayersContext);
  const [gameBoard, setGameBoard] = useState<Board | null>(null);
  useEffect(() => {

    const board = new Board();
    draftContext?.players.forEach(player => {
      player.draftedMembers.forEach(member => {
        let x = rollD12() - 1;  // Adjusting because arrays are 0-indexed
        let y = rollD8() - 1;
        board.placeMember(member, x, y)

      });
    })
    setGameBoard(board)
  }, [draftContext]);
  console.log(gameBoard?.grid.map(item => item))

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Game Board</h1>

      <div className="flex justify-center mt-20">

      </div>

      {gameBoard && (
        <div className="grid grid-cols-12 gap-2 mt-5">
          {gameBoard.grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-10 h-10 flex items-center justify-center border-2 border-gray-600 hover:border-blue-600 transition ease-in-out duration-200"
                onClick={() => {
                  // Handle cell click logic if needed
                }}
              >
                {cell instanceof Member ? <MemberTile  /> : '-'}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Game