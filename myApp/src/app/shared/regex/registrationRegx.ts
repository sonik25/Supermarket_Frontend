export class RegistrationRegx{
    static FirstName(control){
        let regx = /^[A-Za-z]+$/;
        let valid = regx.test(control.value);
        return valid ? null :{firstname:true}
    }
    static LastName(control){
        let regx = /^[A-Za-z]+$/;
        let valid = regx.test(control.value);
        return valid ? null :{firstname:true}
    }
    static userEmail(control){
        let regx =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let valid = regx.test(control.value);
        return valid ? null : {emailid:true}
    }
    static userPassword(control){
        let regx = /^([1-zA-Z0-1@.\s]{1,255})$/;
        let valid = regx.test(control.value);
        return valid ? null : {password:true}
    }
}