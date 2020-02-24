import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }
  get errorMsg() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
        return this.control.errors[propertyName].message || this.genericErrorMsg(propertyName);
      }
    }
    return null
  }


  genericErrorMsg(validatorName: string) {
    const config = {
      'required': `Campo é obrigatório.`,
      'pattern': 'Campo inválido'
    };

    return config[validatorName];
  }

}
