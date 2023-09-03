import { ReactNode, useState } from "react";
import { Board } from "../../entities/board.";
import { MovePlayerUseCase } from "../../useCases/move-player";
import { BoardContext } from "./board-context";
import { Direction } from "../../../types/directions";

interface BoardProviderProps {
  children: ReactNode
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [board, setBoard] = useState(new Board());

  const moveMember = (memberId: string, direction: Direction): boolean => {
    const mover = new MovePlayerUseCase(board);
    const success = mover.move(memberId, direction);
    // Trigger a re-render when a piece is moved
    setBoard(prev => prev);
    return success;
  };

  return (
    <BoardContext.Provider value={{ board, moveMember }}>
      {children}
    </BoardContext.Provider>
  );
};