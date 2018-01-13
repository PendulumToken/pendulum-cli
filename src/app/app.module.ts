import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { BountyProvider } from "./providers/bounty.provider";
import { ProjectProvider } from "./providers/project.provider";
import { UserProvider } from "./providers/user.provider";

import { MyApp } from "./app.component";
import { ExplorePage } from "../pages/explore/explore.page";
import { HomePage } from "../pages/home/home.page";

import { AutoFocusDirective } from "./directives/autofocus.directive";
import { ElasticHeaderDirective } from "./directives/elastic-header.directive";
import { KeyboardAttachDirective } from "./directives/keyboard-attach.directive";
import { TextareaAutosizeDirective } from "./directives/textarea-autosize.directive";

import { SafeUrlPipe } from "./pipes/safeurl.pipe";

let components: Array<any> = [
  MyApp,
  
  ExplorePage,
  HomePage
]

let directives: Array<any> = [
  AutoFocusDirective,
  ElasticHeaderDirective,
  KeyboardAttachDirective,
  TextareaAutosizeDirective
]

let pipes: Array<any> = [
  SafeUrlPipe
]

let providers: Array<any> = [
  BountyProvider,
  ProjectProvider,
  UserProvider,
  
  Keyboard,
  StatusBar,
  SplashScreen,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
]

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      autoFocusAssist: false,
      backButtonText: "",
      loadingEnter: "loading-md-pop-in",
      loadingLeave: "loading-md-pop-out",
      modalEnter: "modal-md-slide-in",
      modalLeave: "modal-md-slide-out",
      mode: "ios",
      pageTransition: "md-transition",
      scrollAssist: false,
      spinner: "dots",
      statusbarPadding: false,
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: providers,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }