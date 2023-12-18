import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-parser-txt';
import { CustomerDataParserJson } from './customer-data-parser-json';

async function run() {
  const filePath = resolve(__dirname, 'files', 'customer.txt');
  // console.log(filePath);
  const customerDataParserTxt = new CustomerDataParserTxt(filePath);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  console.log('----');

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
