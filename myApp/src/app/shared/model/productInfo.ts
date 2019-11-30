export interface IproductInfo{
    prodName:string;
    image:string;
    description:string;
    price:number;
    offerPrice:number;
    isAvailable:boolean;
    isTodayOffer:boolean;
    category:string;
    subCategory:string;
    isAdmin?:boolean;
    recordDate?:Date;
    updatedDate?:Date;
}