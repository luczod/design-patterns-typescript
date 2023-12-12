// recommended by book
export interface EmailValidatorProtocol {
  adapterIsEmail(value: string): boolean;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
