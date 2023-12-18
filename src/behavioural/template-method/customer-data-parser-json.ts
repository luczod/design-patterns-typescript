import { promises } from 'fs';
import { CustomerDataParser } from './customer-data-parser';
import { TCustomerData } from './customer-data';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseDate(): Promise<TCustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: TCustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }

  hook(): void {
    console.log('The hook is run before.');
  }
}
