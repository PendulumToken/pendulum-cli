import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({name: "safeurl"})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
    // Do nothing.  
  }

  transform(value: string, type: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}