import { EmailValidatorProtocol } from './email-validator-protocol';
import isEmail from 'validator/lib/isEmail';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  adapterIsEmail(value: string): boolean {
    return isEmail(value);
  }
}
