import { Component } from "@angular/core";

import { CommunityProvider } from "../../app/providers/community.provider";
import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {

  constructor(public communityProvider: CommunityProvider,
              public userProvider: UserProvider) {
  
  }
  
}