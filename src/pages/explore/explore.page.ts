import { Component } from "@angular/core";

import { CommunityProvider } from "../../app/providers/community.provider";

import { ContentContext } from "../../app/domains/content-context";
import { ContentCollection } from "../../app/domains/content-collection";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {

  public searchQuery: ContentContext = new ContentContext();
  public searchFeed: ContentCollection = new ContentCollection();
  
  constructor(public communityProvider: CommunityProvider) {
  
  }
  
  public initFeed() {
    let communities = this.communityProvider.getCommunities();
    this.searchFeed.append(communities);
  }
  
}