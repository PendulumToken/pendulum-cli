import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { Community } from "../../app/domains/community";

@Component({
  selector: "community-detail-page",
  templateUrl: "community-detail.page.html",
})
export class CommunityDetailPage {

  public community: Community;
  
  constructor(params: NavParams) {
    this.community = params.get("community");
  }
  
}