import { Component } from "@angular/core";

import { MessageProvider } from "../../app/providers/message.provider";
import { PageProvider } from "../../app/providers/page.provider";
import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "chrome-block",
  templateUrl: "chrome.block.html"
})
export class ChromeBlock {

  constructor(public messageProvider: MessageProvider,
              public pageProvider: PageProvider,
              public userProvider: UserProvider) {
  }
  
}