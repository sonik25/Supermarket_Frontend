export interface IuserRegister{
    FirstName:string;
    LastName:string;
    newsLetterCheck:boolean;
    UserLogin:{
        userEmail:string;
        userPassword:string;
    }
    termsAcceptCheck:boolean;
}