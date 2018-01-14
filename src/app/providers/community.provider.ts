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
                                    "Covo is amazing, earnest humans embracing life to the fullest.<br/><br/>Covo is connection, sharing our stories and meals together. <br/><br/>Covo is community, where diversity and experience ignite potential.<br/><br/>Covo is meaning and purpose, where you have the opportunity and tools to exceed your expectations.<br/><br/>Covo is balance \u2013 in life and work.",
                                    "San Francisco",
                                    "urn:category:coworking",
                                    "https://static1.squarespace.com/static/59dbf6afbe42d6289080efa3/5a0bdc23d7bdce2dbdde3da8/5a565e9974b76ce5dcc37335/1515609808317/?format=1500w");
  }
  
  private createMockCommunity(communityUrn: string,
                              name: string,
                              tagline: string,
                              description: string,
                              location: string,
                              categoryUrn: string,
                              coverImageUrl: string): Community {
    let community = new Community();
    
    community.urn = communityUrn;
    community.name = name;
    community.tagline = tagline;
    community.description = description;
    community.location = location;
    
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