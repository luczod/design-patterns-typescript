import { SystemUserProtocol, TSystemUserAdress } from './sytstem-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firtName: string, userName: string) {
    this.firstName = firtName;
    this.userName = userName;
  }

  async getAddresses(): Promise<TSystemUserAdress[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'av. 1', number: 50 },
          { street: 'av. 2', number: 52 },
        ]);
      }, 2000);
    });
  }
}
