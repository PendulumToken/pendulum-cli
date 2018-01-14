import { Injectable } from "@angular/core";

import { Category } from "../domains/category";
import { Image } from "../domains/image";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class CategoryProvider {
  
  private mockCategories: Array<Category> = [];
  
  constructor() { 
    this.initMockCategories();
  }
  
  public getCategories(): Array<Category> {
    return this.mockCategories; 
  }
  
  public getCategoryByCategoryUrn(categoryUrn: string): Category {
    for (let category of this.mockCategories) {
      if (category.urn == categoryUrn) {
        return category;
      }
    }
    
    console.log("** Unable to find: " + categoryUrn);
    return null;
  }
  
  private initMockCategories() {
    this.mockCategories.push(this.createCoworking());
  }
  
  private createCoworking(): Category {
    return this.createMockCategory("urn:category:coworking",
                                   "Coworking",
                                   "http://cdn.mysitemyway.com/icons-watermarks/flat-circle-white-on-black/iconathon/iconathon_coworking-space/iconathon_coworking-space_flat-circle-white-on-black_512x512.png");
  }
  
  private createMockCategory(categoryUrn: string,
                             name: string,
                             coverImageUrl: string): Category {
    let category = new Category();
    
    category.urn = categoryUrn;
    category.name = name;
    
    if (coverImageUrl) {
      category.coverImage = new Image(); 
      category.coverImage.urn = "urn:image:" + StringUtils.generateUUID();
      category.coverImage.url = coverImageUrl;
    }
    
    return category;
  }
  
}