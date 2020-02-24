import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';




@NgModule({
  declarations: [
    PopupComponent,
    ClickOutsideDirective,
    PhonePipe,
    CpfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupComponent,
    ClickOutsideDirective,
    PhonePipe,
    CpfPipe,
  ]
})
export class SharedModule { }
