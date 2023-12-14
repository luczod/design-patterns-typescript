export type TSystemUserAdress = { street: string; number: number };

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddresses(): Promise<TSystemUserAdress[]>;
}
