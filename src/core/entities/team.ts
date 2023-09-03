import { Member } from "./member";

export class Team {
  members: Member[];
  id: string;

  constructor(id: string) {
      this.id = id;
      this.members = [];
  }

  addMember(member: Member): void {
      this.members.push(member);
  }
}
