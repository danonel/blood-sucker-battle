import { createContext } from "react";
import { Board } from "../../entities/board.";
import { Direction } from "../../../types/directions";

export interface BoardContextType {
  board: Board;
  moveMember: (memberId: string, direction: Direction) => boolean;
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined)