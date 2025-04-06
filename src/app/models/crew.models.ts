export class Crew {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  bio: string;

  constructor(id: number, name: string, imageUrl: string, role: string, bio: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.role = role;
    this.bio = bio;
  }
}