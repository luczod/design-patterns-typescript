import { TCustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: TCustomerData[] = [];

  constructor(protected filePath: string) {}

  // final method
  readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseDate();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): TCustomerData[] {
    // in .map ({})
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf?.replace(/\D/g, ''), // anything but numbers
    }));
  }

  protected hook(): void {}

  protected abstract parseDate(): Promise<TCustomerData[]>;
}
