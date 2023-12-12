import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

export function emailValidatorFnAdapter(value: string): boolean {
  return isEmail(value);
}
