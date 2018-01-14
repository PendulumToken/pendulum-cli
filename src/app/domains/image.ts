export class Image {

  public urn: string;
  public url: string;
  public thumbnailUrl: string;
  
  constructor(imageData?: any) {
    if (imageData) {
      this.urn = imageData.urn;
      this.url = imageData.url;
      this.thumbnailUrl = imageData.thumbnailUrl;     
    }
  }
  
}