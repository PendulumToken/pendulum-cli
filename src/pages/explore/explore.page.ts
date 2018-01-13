import { Component } from "@angular/core";

import { ProjectProvider } from "../../app/providers/project.provider";
import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {

  constructor(public projectProvider: ProjectProvider,
              public userProvider: UserProvider) {
  
  }
  
}