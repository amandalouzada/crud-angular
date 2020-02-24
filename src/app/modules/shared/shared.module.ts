import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [
    PopupComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
