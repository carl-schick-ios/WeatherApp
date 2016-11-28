export class City {
    name: string;
    imageSrc: string;
    woeId: number;

    constructor(name: string, imageSrc: string, woeId: number){
        this.name = name;
        this.imageSrc = imageSrc;
        this.woeId = woeId;
    }
}