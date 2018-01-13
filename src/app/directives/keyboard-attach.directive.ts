import { Directive, ElementRef, Input } from "@angular/core";
import { Content, Platform } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";

/**
 * Credit to: https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * 
 * @name KeyboardAttachDirective
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 * 
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 * 
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 */

@Directive({
  selector: "[keyboard-attach]"
})
export class KeyboardAttachDirective {
  @Input("keyboard-attach") content: Content;

  private onShowSubscription: any;
  private onHideSubscription: any;

  constructor(private elementRef: ElementRef, 
              platform: Platform,
              keyboard: Keyboard) {
    if (platform.is("cordova") && platform.is("ios")) {
      this.onShowSubscription = keyboard.onKeyboardShow().subscribe(e => this.onShow(e));
      this.onHideSubscription = keyboard.onKeyboardHide().subscribe(() => this.onHide());
    }
  }

  ngOnDestroy() {
    if (this.onShowSubscription) {
      this.onShowSubscription.unsubscribe();
    }
    if (this.onHideSubscription) {
      this.onHideSubscription.unsubscribe();
    }
  }

  private onShow(e) {
    let keyboardHeight: number = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
    this.setElementPosition(keyboardHeight);
  };

  private onHide() {
    this.setElementPosition(0);
  };

  private setElementPosition(pixels: number) {
    this.elementRef.nativeElement.style.marginBottom = pixels + "px";
    this.content.resize();
  }
}