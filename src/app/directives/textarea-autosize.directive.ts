import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

/* Based on https://github.com/flivni/ionic2-autosize */

@Directive({
  selector: "ion-textarea[autosize]"
})
export class TextareaAutosizeDirective implements OnInit {
    
  @HostListener("input", ["$event.target"])
  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  }

  constructor(public element:ElementRef) {
  }

  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }

  adjust():void {
    let textArea = this.element.nativeElement.getElementsByTagName("textarea")[0];
    textArea.style.overflow = "hidden";
    textArea.style.height = textArea.scrollHeight + "px";
  }
  
}