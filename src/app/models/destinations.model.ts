export class Destinations {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    distance: string;
    travel: string;

    constructor(id: number, name: string, description: string, imageUrl: string, distance: string, travel: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.distance = distance;
        this.travel = travel;
    }
}