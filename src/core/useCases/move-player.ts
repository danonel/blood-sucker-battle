import { Direction } from "../../types/directions";
import { Board } from "../entities/board.";
import { Member } from "../entities/member";

export class MovePlayerUseCase {
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  private isCellEmpty(x: number, y: number): boolean {
    return this.board.grid[y][x] === '-';
  }

  private findMemberById(memberName: string): Member | null {
    for (let y = 0; y < Board.SIZE; y++) {
      for (let x = 0; x < Board.SIZE; x++) {
        const cell = this.board.grid[y][x];
        if (cell instanceof Member && cell.name === memberName) {
          return cell;
        }
      }
    }
    return null;
  }

  move(memberName: string, direction: Direction): boolean {
    const member = this.findMemberById(memberName);
    if (!member) {
      throw new Error("Member not found on the board");
    }

    const { x, y } = member.coords;
    let newX = x;
    let newY = y;

    const directionMovements: Record<Direction, { x: number, y: number }> = {
      "UP": { x: 0, y: -1 },
      "DOWN": { x: 0, y: 1 },
      "LEFT": { x: -1, y: 0 },
      "RIGHT": { x: 1, y: 0 }
    };

    const { x: deltaX, y: deltaY } = directionMovements[direction];
    const { x: oldX, y: oldY } = member.coords;
    const newCoords = { x: oldX + deltaX, y: oldY + deltaY };

    if (
      newCoords.x >= 0 && newCoords.x < Board.SIZE &&
      newCoords.y >= 0 && newCoords.y < Board.SIZE &&
      this.isCellEmpty(newCoords.x, newCoords.y)
    ) {
      this.board.grid[oldY][oldX] = '-';
      this.board.grid[newCoords.y][newCoords.x] = member;
      member.setPosition(newCoords.x, newCoords.y);
      return true;
    }
    return false
  }
}