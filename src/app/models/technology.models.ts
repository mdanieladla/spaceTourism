export class Technology {
  id: number;
  name: string;
  imagePortraitUrl: string;
  imageLandscapeUrl: string;
  description: string;

  constructor(id: number, name: string, imagePortraitUrl: string, imageLandscapeUrl: string, description: string) {
    this.id = id;
    this.name = name;
    this.imagePortraitUrl = imagePortraitUrl;
    this.imageLandscapeUrl = imageLandscapeUrl;
    this.description = description;
  }
}