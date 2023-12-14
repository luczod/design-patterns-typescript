import { AdminUser } from './admin-users';
import { SystemUserProtocol, TSystemUserAdress } from './sytstem-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: TSystemUserAdress[] | null = null;

  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<TSystemUserAdress[]> {
    this.realUser = this.createUser();
    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }
    return this.realUserAddresses;
  }
}
