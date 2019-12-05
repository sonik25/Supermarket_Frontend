export interface IuserRegister {
  firstName: string;
  lastName: string;
  address: string;
  mobile: number;
  newsLetterCheck: boolean;
  UserLogin: {
    userEmail: string;
    userPassword: string;
  };
  termsAcceptCheck: boolean;
}
