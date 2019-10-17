
export default class Util {
  
  phonenumber(inputText:string)
  {
    var phoneno = /^\d{10}$/;
    if(inputText.match(phoneno))
      {
        return true;
      }
      else
      {
          return false;
      }
  }

  validateEmail(email:string){
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
      return true;
    }
    else {
  
      return false;
    }
  
  }
  
  validateMobileNo(mobileNo:string) {
    var filter = /^(([0-9]{10})|(0[0-9]{10}))$/;
    if (filter.test(mobileNo)) {
      return true;
    }
    else {
  
      return false;
    }
  }
  
  validateWebSiteUrl(Url:string) {
    var filter = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (filter.test(Url)) {
      return true;
    }
    else {
  
      return false;
    }
  }
  
  }



export interface IContactInfo {
    Id:number,
    FullName: string,
    Email :string,
    MobileNo: string,
    landline :string,
    websiteUrl:string,
    websiteDesc:string,
    Address: string
  }

  export class ContactInfo {
    Id:number;
    FullName: string;
    Email :string;
    MobileNo: string;
    landline :string;
    websiteUrl:string;
    websiteDesc:string;
    Address: string;
    constructor(args:any){
      this.Id = args.Id;
      this.FullName = args.FullName;
      this.Email =args.Email;
      this.MobileNo = args.MobileNo;
      this.landline = args.landline;
      this.websiteUrl = args.websiteUrl;
      this.Address = args.Address;
      this.websiteDesc = args.websiteDesc;
    }
  }

  export interface ErrorMsgs {
    FullNameErr: string,
    EmailErr :string,
    MobileNoErr: string,
    landlineErr :string,
    websiteUrlErr:string,
    websiteDescErr:string,
    AddressErr: string
  }