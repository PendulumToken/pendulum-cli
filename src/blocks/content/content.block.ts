import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "content-block",
  templateUrl: "content.block.html"
})
export class ContentBlock {
    
  @Input()
  public content: any;
  
  @Input()
  public layout: string;
  
  @Input()
  public index: number;
  
  @Output()
  public notify: EventEmitter<string> = new EventEmitter<string>();
  
  onNotify(event) {
    this.notify.emit(event); 
  }
  
}