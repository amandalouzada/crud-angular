import { FormControl } from '@angular/forms';
import * as validatorCpf from "@fnando/cpf"; // import the whole library
export class FormValidations {

  static cpfValidator(control: FormControl) {

    const cpf = control.value;
    if (cpf && cpf !== '') {
      return validatorCpf.isValid(cpf) ? null : { cpfInvalid: { message: 'CPF inválido.', invalid: true } };
    }
    return null;
  }

  static phoneValidator(control: FormControl) {
    const phone = control.value;
    const phoneValidator = /^[0-9]{13}$/;
    if (phone && phone !== '') {
      return phoneValidator.test(phone) ? null : { phoneInvalid: { message: 'Telefone inválido.', invalid: true } };
    }
    return null;
  }


}