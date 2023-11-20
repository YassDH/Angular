export class Product {
    id : number;
    title : string;
    thumbnail : string;
    constructor( id = 0, title = "", thumbnail = "",) {
      this.id = id
      this.title = title
      this.thumbnail = thumbnail
    }
}