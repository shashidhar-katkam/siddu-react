import * as React from "react";
import ContactService from '../services/ContactsService';
import Util, {IContactInfo, ErrorMsgs} from '../Util/util';
import Star from './Star';



  interface IState {
    showModel:boolean;
    contactInfo : IContactInfo;
    errorMsgs : ErrorMsgs;
    isFormValid:boolean;
  }
  
  interface IProps {
     hideModel : any;  //(ev: React.MouseEvent<HTMLSpanElement>) => void;
     showModel: boolean;
     contact: IContactInfo;
     isEdit:boolean;
     contactUpdated:any;  
     closeModel:any;
    //  addContact :(ev: React.MouseEvent<HTMLInputElement>, data:any) => void
  }
  

class ContactForm extends React.Component<IProps, IState>  {

  constructor(props:IProps) {
    debugger;
    super(props);
    this.state = { 
       showModel: false,
       contactInfo : { FullName:'',Id:0, Email:'', MobileNo:'', landline:'', websiteDesc:'', websiteUrl:'', Address:'' },
       errorMsgs:{ FullNameErr:'',EmailErr:'', MobileNoErr:'', landlineErr:'', websiteDescErr:'', websiteUrlErr:'', AddressErr:'' },
       isFormValid: false
       
    };
    this.addOrUpdateContact = this.addOrUpdateContact.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.fullNameChangeHandle = this.fullNameChangeHandle.bind(this);
    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.mobileNoChangeHandle = this.mobileNoChangeHandle.bind(this);
    this.landlineChangeHandle = this.landlineChangeHandle.bind(this);
    this.websiteNameChangeHandle = this.websiteNameChangeHandle.bind(this);
    this.websiteUrlChangeHandle = this.websiteUrlChangeHandle.bind(this);
    this.addressChangeHandle = this.addressChangeHandle.bind(this);
    this.isFormValid = this.isFormValid.bind(this);

  }

    fullNameChangeHandle(event:any){
      let erorMessage;
      if(event.target.value === ""){
        erorMessage ="Full Name is Required";
      }else{
        erorMessage ="";
        }

        this.setState({
          contactInfo:{ ...this.state.contactInfo, FullName: event.target.value},
          errorMsgs : {...this.state.errorMsgs, FullNameErr: erorMessage  }
        
        });
    }

    emailChangeHandle(event:any){
      let util = new Util();
      let errorMessage;
      if(event.target.value === ""){
        errorMessage = "Email is Required" ;
      }else if(!util.validateEmail(event.target.value)){
        errorMessage ="Invalid Emaid Id" ;
      }
      else
      {
       errorMessage ="";
      }

      this.setState({
          contactInfo:{ ...this.state.contactInfo, Email: event.target.value},
          errorMsgs : {...this.state.errorMsgs, EmailErr: errorMessage  },
        });
    }

    mobileNoChangeHandle(event:any){
      let util = new Util();
      let errorMessage;
         if(event.target.value ===""){
            errorMessage ="Mobile No is Required";
         }else if(!util.phonenumber(event.target.value)){
            errorMessage ="Invalid Mobile No";
         }else {
            errorMessage ="";
         }
      this.setState({
          contactInfo:{ ...this.state.contactInfo, MobileNo: event.target.value},
          errorMsgs : {...this.state.errorMsgs, MobileNoErr: errorMessage  }
      });

    }

    landlineChangeHandle(event:any){
      let errorMessage;
      if(event.target.value === ""){
        errorMessage = "Landline is Required";
      }else{
        errorMessage="";
        }
        this.setState({
          contactInfo:{ ...this.state.contactInfo, landline: event.target.value},
          errorMsgs : {...this.state.errorMsgs, landlineErr: errorMessage  },
        });
    }

    websiteNameChangeHandle(event:any){
      let errorMessage;
      if(event.target.value === ""){
        errorMessage ="website Name is Required";
      }else{
        errorMessage ="";
        }
      this.setState({
        contactInfo:{ ...this.state.contactInfo, websiteDesc: event.target.value},
        errorMsgs : {...this.state.errorMsgs, websiteDescErr: errorMessage },
      });

    }

    websiteUrlChangeHandle(event:any){
      let util = new Util();
      let errorMessage;
      if(event.target.value === ""){
        errorMessage = "Url is Required";
      }else if(!util.validateWebSiteUrl(event.target.value)){
          errorMessage="Invalid URL";
        }
      else{
      errorMessage="";
      }
        this.setState({
          contactInfo:{ ...this.state.contactInfo, websiteUrl: event.target.value},
          errorMsgs : {...this.state.errorMsgs, websiteUrlErr: errorMessage }
        });
    }

    addressChangeHandle(event:any){
      let errorMessage;
      this.setState({contactInfo:{ ...this.state.contactInfo, Address: event.target.value}});
      if(event.target.value === ""){
        errorMessage ="Address is Required";
      }else{
      errorMessage="";
        }
        this.setState({contactInfo:{ ...this.state.contactInfo, Address: event.target.value},
          errorMsgs : {...this.state.errorMsgs, AddressErr:errorMessage  }
        });
    }



    isFormValid(){
      let util = new Util();
      let contactinfo = this.state.contactInfo;
      let errormsgs = this.state.errorMsgs;
      let isFormValid = true;
      if(contactinfo.FullName === ""){
        errormsgs.FullNameErr ="Full Name is Required";
        isFormValid = false;
      }else{
        errormsgs.FullNameErr ="";
      }

      if(contactinfo.Email === ""){
        errormsgs.EmailErr = "Email is Required" ;
        isFormValid = false;
      }else if(!util.validateEmail(contactinfo.Email)){
        errormsgs.EmailErr ="Invalid Emaid Id" ;
        isFormValid = false;
      }else
      {
        errormsgs.EmailErr ="";
      }

      if(contactinfo.MobileNo ===""){
            errormsgs.MobileNoErr ="Mobile No is Required";
            isFormValid = false;
      }else if(!util.phonenumber(contactinfo.MobileNo)){
          errormsgs.MobileNoErr ="Invalid Mobile No";
          isFormValid = false;
      }else {
          errormsgs.MobileNoErr ="";
      }
      
      if(contactinfo.landline === ""){
          errormsgs.landlineErr = "Landline is Required";
          isFormValid = false;
      }else{
          errormsgs.landlineErr="";
      }
      if(contactinfo.websiteDesc === ""){
        errormsgs.websiteDescErr ="website Name is Required";
        isFormValid = false;
      }else{
        errormsgs.websiteDescErr ="";
      }
      if(contactinfo.websiteUrl === ""){
        errormsgs.websiteUrlErr = "Url is Required";
        isFormValid = false;
      }else if(!util.validateWebSiteUrl(contactinfo.websiteUrl)){
        errormsgs.websiteUrlErr = "Invalid URL";
        isFormValid = false;
        }
      else{
        errormsgs.websiteUrlErr = "";
      }
      if(contactinfo.Address === ""){
        errormsgs.AddressErr ="Address is Required";
        isFormValid = false;
      }else{
        errormsgs.AddressErr="";
      }

      this.setState({
          errorMsgs : errormsgs
        });

      return  isFormValid;

    }


    componentWillReceiveProps(newProps:IProps){
      let editContact: IContactInfo = newProps.contact;
      if(newProps.isEdit){
          this.setState({
            contactInfo : {FullName:editContact.FullName,Id:editContact.Id, Email:editContact.Email, MobileNo:editContact.MobileNo, landline:editContact.landline, websiteDesc:editContact.websiteDesc, websiteUrl:editContact.websiteUrl, Address:editContact.Address},
          });
      }else{
        this.setState({
          contactInfo :{FullName:'',Id:0, Email:'', MobileNo:'', landline:'', websiteDesc:'', websiteUrl:'', Address:''},
          });
      }
      this.setState({
        showModel : newProps.showModel,
      });
    }

    addOrUpdateContact(event:any){
      if(this.isFormValid()){
        let contService =new ContactService();
        let contactinfo;
        if(this.state.contactInfo.Id === 0){
          contactinfo = contService.addContact(this.state.contactInfo);
        }else{
          contactinfo = contService.updateContact(this.state.contactInfo);
        }
        this.resetAll();
        this.setState({
        showModel : false,
        });
        this.props.contactUpdated(contactinfo, true);
      }
    };

    resetAll(){
      this.setState({
        contactInfo : { FullName:'',Id:0, Email:'', MobileNo:'', landline:'', websiteDesc:'', websiteUrl:'', Address:'' },
        errorMsgs:{ FullNameErr:'',EmailErr:'', MobileNoErr:'', landlineErr:'', websiteDescErr:'', websiteUrlErr:'', AddressErr:'' }
      });
      this.props.hideModel();
    }; 


    render(){
      return (
        <>
          <div className={"modal-popup " + (this.state.showModel ? 'show-modal' : 'hide-modal') }>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="popup-header">{this.props.isEdit ? 'Edit Contact': 'Add Contact'}</h4>
                    <span className="close" onClick={this.props.closeModel}>&times;</span>
                </div>
                <div className="modal-body">
                    <div className="row">
                         <div className="col-sm-12">
                            <div className="form-group form-group-sm">
                                <label htmlFor="FullName" className="control-label lables">Full Name<Star /></label>
                                <input type="text"  className="form-control" name="FullName" value={this.state.contactInfo.FullName} onChange={this.fullNameChangeHandle} />
                                <p id="nameErrorMsg" className="form-invalid">{this.state.errorMsgs.FullNameErr}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group form-group-sm">
                                <label className="control-label lables">Email<Star /></label>
                                <input type="text" className="form-control" name="Email" value={this.state.contactInfo.Email} onChange={this.emailChangeHandle} />
                                <p id="emailErrorMsg" className="form-invalid">{this.state.errorMsgs.EmailErr}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label className="control-label lables">Mobile<Star /></label>
                            <input type="text" className="form-control" name="MobileNo" value={this.state.contactInfo.MobileNo}  onChange={this.mobileNoChangeHandle} />
                            <p id="phoneNoErrorMsg" className="form-invalid">{this.state.errorMsgs.MobileNoErr}</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="control-label lables">Landline<Star /></label>
                                <input type="text" className="form-control" name="landline" value={this.state.contactInfo.landline}  onChange={this.landlineChangeHandle} />
                                <p id="landLineErrorMsg" className="form-invalid">{this.state.errorMsgs.landlineErr}</p>
                            </div>
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group form-group-sm">
                                <label className="control-label lables">Website(Display Name)<Star /></label>
                                <input type="text" className="form-control" name="websiteDesc" placeholder="Mysite" value={this.state.contactInfo.websiteDesc}  onChange={this.websiteNameChangeHandle} />
                                <p id="websiteDispNameErrorMsg" className="form-invalid">{this.state.errorMsgs.websiteDescErr}</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form-group-sm">
                                <label className="control-label lables">Website(URL)<Star /></label>
                                <input type="text" className="form-control" name="websiteUrl" placeholder="www.example.com" value={this.state.contactInfo.websiteUrl}  onChange={this.websiteUrlChangeHandle} />
                                <p id="websiteUrlErrorMsg" className="form-invalid">{this.state.errorMsgs.websiteUrlErr}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group form-group-sm">
                                <label className="control-label lables">Address<Star /></label>
                                <textarea className="form-control" name="Address" value={this.state.contactInfo.Address}  onChange={this.addressChangeHandle} ></textarea>
                                <p id="addressErrorMsg" className="form-invalid">{this.state.errorMsgs.AddressErr}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row btns">
                        <div>
                            <input type="button" className="btn btn-info btn-reset" onClick= {this.resetAll}  value={this.props.isEdit ? 'Cancel': 'Reset'} />
                            <input type="submit" className="btn btn-success btn-add" onClick= {this.addOrUpdateContact} value={this.props.isEdit ? 'Update': 'Create'} />
                        </div>
                      
                    </div>
                </div>
            </div>
          </div>
         </>
             );
    }
}


export default ContactForm;

