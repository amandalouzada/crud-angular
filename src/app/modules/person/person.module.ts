import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [PersonComponent, FormComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ]
})
export class PersonModule { }
