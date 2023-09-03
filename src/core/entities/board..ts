import { Member } from "./member";

export class Board {
    static SIZE_X: number = 12; // 11 for X axis
    static SIZE_Y: number = 12;  // 8 for Y axis
    grid: (Member | string)[][];

    constructor() {
        this.grid = Array(Board.SIZE_Y).fill('-').map(() => Array(Board.SIZE_X).fill('-'));
    }

    placeMember(member: Member, x: number, y: number): boolean {
        if (x >= 0 && x < Board.SIZE_X && y >= 0 && y < Board.SIZE_Y && this.grid[y][x] === '-') {
            this.grid[y][x] = member;
            member.setPosition(x, y);
            console.log(`Placed member ${member.name} at x:${x}, y:${y}`);  // Debug log
            return true;
        }
        return false;
    }
}