import { Coords } from "../../types/coordinates";

export class Member {
  battleAttributes = {}
  coords?: Coords = { x: 0, y: 0 }
  team?: string
  name: string
  constructor(name: string) {
    this.name = name
  }
  
  setTeamMember(team: string) {
    this.team = team
  }

  setCoords(coords: Coords) {
    this.coords = coords
  }

  setAttributes(attributes: any): void {
    this.battleAttributes = attributes;
  }

  setPosition(x: number, y: number): void {
    this.coords = { x, y };
  }
}