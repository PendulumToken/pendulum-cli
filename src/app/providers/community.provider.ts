import { Injectable } from "@angular/core";

import { CategoryProvider } from "./category.provider";

import { Community } from "../domains/community";
import { Image } from "../domains/image";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class CommunityProvider {
  
  private mockCommunities: Array<Community> = [];
  
  constructor(private categoryProvider: CategoryProvider) { 
    this.initMockCommunities();
  }
 
  public getCommunities(): Array<Community> {
    return this.mockCommunities;
  }

  public getCommunityByCommunityUrn(communityUrn: string): Community {
    for (let community of this.mockCommunities) {
      if (community.urn == communityUrn) {
        return community;
      }
    }
    
    console.log("** Unable to find: " + communityUrn);
    return null;
  }

  private initMockCommunities() {
    this.mockCommunities.push(this.createCovo());
  }

  private createCovo(): Community {
    return this.createMockCommunity("urn:community:covo",
                                    "Covo",
                                    "We believe in making every employee and member feel like family. It's what makes us different, and we wouldn't have it any other way.",
                                    "Covo is amazing, earnest humans embracing life to the fullest.\r\n\r\nCovo is connection, sharing our stories and meals together. \r\n\r\nCovo is community, where diversity and experience ignite potential.\r\n\r\nCovo is meaning and purpose, where you have the opportunity and tools to exceed your expectations.\r\n\r\nCovo is balance \u2013 in life and work.",
                                    "urn:category:coworking",
                                    "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p480x480/10460503_1551382218462291_8294650759174447417_n.png");
  }
  
  private createMockCommunity(communityUrn: string,
                              name: string,
                              tagline: string,
                              description: string,
                              categoryUrn: string,
                              coverImageUrl: string): Community {
    let community = new Community();
    
    community.urn = communityUrn;
    community.name = name;
    community.tagline = tagline;
    community.description = description;
    
    if (categoryUrn) {
      community.category = this.categoryProvider.getCategoryByCategoryUrn(categoryUrn);
    }
    
    if (coverImageUrl) {
      community.coverImage = new Image();
      community.coverImage.urn = "urn:image:" + StringUtils.generateUUID();
      community.coverImage.url = coverImageUrl;
    }
    
    return community;
  }
  
}