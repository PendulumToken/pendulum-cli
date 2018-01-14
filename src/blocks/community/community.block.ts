import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { Community } from "../../app/domains/community";

import { CommunityDetailPage } from "../../pages/community-detail/community-detail.page";

@Component({
  selector: "community-block",
  templateUrl: "community.block.html"
})
export class CommunityBlock {

  @Input()
  public community: Community;
  
  @Input()
  public layout: string;
  
  constructor(private navController: NavController) {
    // Do nothing.
  }
  
  onViewCommunityDetail() {
    this.navController.push(CommunityDetailPage, {
      "community": this.community  
    });
  }
  
}