import { promises } from 'fs';
import { TCustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseDate(): Promise<TCustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    // const lines = data.split('\r\n'); // CRLF windows
    const lines = data.split('\n'); // LF

    const customerData: TCustomerData[] = [];

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t'); // tab

      if (!name) continue;

      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
