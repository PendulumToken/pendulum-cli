import { Image } from "./image";
import { Incentive } from "./incentive";
import { User } from "./user";
import { Video } from "./video";

export class Post {
 
  public urn: string;
  public title: string;
  public body: string;
  public category: string;
  public incentive: Incentive;
  public image: Image;
  public video: Video;
  public createdBy: User;
  public createdAt: string;
  
  getExcerpt() {
    if (this.body && this.body.length > 150) {
      let limit = (this.video == null) ? 150 : 100;
      return this.body.replace(/(<p[^>]+?>|<p>|<strong>|<\/strong>|<\/p>)/img, "").substring(0, limit) + "...";
    }
    
    return null;
  }
  
}