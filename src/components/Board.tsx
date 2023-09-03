import React from 'react';
import { MovementBoard } from '../features/board/board-movements';
import { Player } from '../features/member/member';
import { PlayerIcon } from './PlayerIcon';

interface BoardProps {
  boardInstance: string[][];
  players: Player[];

}


export const BoardComponent: React.FC<BoardProps> = ({ boardInstance, players }) => {

  const getPlayerAt = (x: number, y: number): 'P1' | 'P2' | null => {
    for (let player of players) {
      const [playerX, playerY] = player.getPosition();
      if (playerX === x && playerY === y) {
        return player.getIcon() as 'P1' | 'P2';
      }
    }
    return null;
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-12 gap-0.5">
        {boardInstance.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`border h-16 w-16 flex justify-center items-center`}
            >
              {getPlayerAt(rowIndex, cellIndex) ?
                <PlayerIcon type={getPlayerAt(rowIndex, cellIndex) as 'P1' | 'P2'} /> :
                null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};