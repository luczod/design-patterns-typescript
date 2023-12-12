import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
/* import isEmail from 'validator/lib/isEmail';

const email = 'Doe1@email.com';

if (isEmail(email)) {
  console.log('É valido');
} else {
  console.log('É inválido');
} */

function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.adapterIsEmail(email)) {
    console.log('email is valid (CLASS)');
  } else {
    console.log('email is invalid (CLASS)');
  }
}

function validateEmailFN(emailValidator: EmailValidatorFnProtocol, email: string): void {
  if (emailValidator(email)) {
    console.log('email is valid (FUNCTION)');
  } else {
    console.log('email is invalid (FUNCTION)');
  }
}

validateEmailClass(new EmailValidatorAdapter(), 'Doe1@email.com');

validateEmailFN(emailValidatorFnAdapter, 'Doe1@email.com');
