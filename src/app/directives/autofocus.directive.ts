import {Directive, Renderer, ElementRef} from "@angular/core";
import { Platform } from "ionic-angular";

@Directive({
  selector: "[autofocus]"
})
export class AutoFocusDirective {
    
  constructor(private renderer: Renderer, private elementRef: ElementRef, private platform: Platform) {
    // Do nothing  
  }

  ngOnInit() {
    // Skip if iOS since autofocus does not yet work in wkwebview.
    // https://issues.apache.org/jira/browse/CB-10376
    if (this.platform.is("ios")) {
      // return;
    }
    
    setTimeout(() => {
      let input = this.elementRef.nativeElement.querySelector("input");
      let textarea = this.elementRef.nativeElement.querySelector("textarea");
      
      if (input) {
        this.renderer.invokeElementMethod(input, "focus", []);        
      }
      
      if (textarea) {
        this.renderer.invokeElementMethod(textarea, "focus", []);        
      }
    }, 600);  
  }
  
}