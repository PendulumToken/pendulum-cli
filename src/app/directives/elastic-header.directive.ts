import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[elastic-header]"
})
export class ElasticHeaderDirective {
  
  private header: any;
  private scrollHandle: any;
  private previousScrollTop: number;
  
  constructor(private elementRef: ElementRef) {
    // Do nothing.
  }
  
  ngAfterViewInit() {
    let headers = document.getElementsByTagName("ion-header");
    this.header = headers[headers.length - 1];

    this.scrollHandle = this.elementRef.nativeElement.getElementsByClassName("scroll-content")[0];
    this.scrollHandle.addEventListener("scroll", () => {
      this.onScroll();
    }); 
  }
  
  private onScroll() {
    let currentScrollTop = this.scrollHandle.scrollTop;
    let scrollThreshold = 100;
    
    if (currentScrollTop < scrollThreshold) {
      this.header.classList.add("elastic");
    } else {
      this.header.classList.remove("elastic");
    }
    
    this.previousScrollTop = currentScrollTop;
  }

}