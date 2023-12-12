// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// leaf
export class ValidateEmailLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateStringLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumberLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// Client code
const validateEmail = new ValidateEmailLeaf();
const validateNumber = new ValidateNumberLeaf();
const validateString = new ValidateStringLeaf();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateNumber, validateString);
console.log(validationComposite.validate('doe1@email.com'));
