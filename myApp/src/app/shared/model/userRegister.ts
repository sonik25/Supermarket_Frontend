export interface IuserRegister{
    firstName:string;
    lastName:string;
    newsLetterCheck:boolean;
    UserLogin:{
        userEmail:string;
        userPassword:string;
    }
    termsAcceptCheck:boolean;
}