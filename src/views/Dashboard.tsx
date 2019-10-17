import * as React from "react";
import Navbar from '../layouts/navbar';
import AllContacts from './allContacts';
import ContactDetails from './ContactDetails';
import ContactService from '../services/ContactsService';
import ContactForm from './ContactForm';
import {ContactInfo, IContactInfo} from '../Util/util';

export interface IState {
  allContacts: IContactInfo[];
  contact: IContactInfo;
  editContactdata:ContactInfo;
  showModel: boolean;
  isEdit:boolean;
  //values: IValues;
}

// export interface IValues {
//   /* Key value pairs for all the field values with key being the field name */
//   [key: string]: any;
// }


 

interface IProps {
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  showModel :boolean,

}

class Dashborad extends React.Component<IProps, IState> {

    constructor(props:IProps ) {
      super(props);
      let contService = new ContactService();
      var allContactsdata= contService.getAllContacts();
      this.state = { 
        allContacts :allContactsdata,
        contact:allContactsdata[0],
        editContactdata: allContactsdata[0],
        showModel: false,
        isEdit :false,
        
        };

    this.contactSelected = this.contactSelected.bind(this);
    this.addClick = this.addClick.bind(this);
    this.hideModel = this.hideModel.bind(this);
    this.editContact = this.editContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.contactUpdated = this.contactUpdated.bind(this);
    this.closeModel = this.closeModel.bind(this);

    }
    hideModel(){
      if(this.state.isEdit){
        this.setState({
          showModel :false
        });
      }else{
        this.setState({
          showModel :true
        });
      }
    }

    contactSelected(event:any, Id:any) {
        let contService = new ContactService();
        this.setState({
                contact : contService.getContactById(Id),
              });
    }

    addClick() {
      debugger;
       this.setState({
        editContactdata: new ContactInfo({}),
        isEdit:false,
        showModel : true,
        });
      
    }
   

 
    closeModel(){
      this.setState({
        showModel : false,
        isEdit: false,
        
      });
    }


    contactUpdated(contactinfo:ContactInfo, updated: boolean){
      if(updated){
        this.state.allContacts.map((contact) =>{
          if(contact.Id === contactinfo.Id){
            contact = contactinfo;
          }
            // return contact;
        });
      }else{
        this.state.allContacts.push(contactinfo);
      }

      this.setState({
        showModel : false,
        isEdit: false,
        
        allContacts: this.state.allContacts,
        contact:this.state.allContacts[0]
      });
    }

    editContact(){
      this.setState({
        editContactdata: this.state.contact,
        showModel : true,
        isEdit: true,
      
      });
      
    }

    deleteContact(event:any, id:any){
        let contService =new ContactService();
        contService.deleteContactById(id);
        let allContatsdata = contService.getAllContacts();
        this.setState({
          allContacts :allContatsdata, 
          contact: allContatsdata[0]
        });
      }
 
    render(){
      return (
        <>
        <div className="container-fluid">
          <Navbar  onClick= {this.addClick} />
          <div className="row contact-section">
            <div className="col-sm-4">
               <AllContacts allContacts={this.state.allContacts} onClick={this.contactSelected}> </AllContacts>
            </div>
            <div className="col-sm-6">
               <ContactDetails record={this.state.contact} deleteContact={this.deleteContact} editContact={this.editContact} />
            </div>
        </div>
        </div>
       <ContactForm closeModel={this.closeModel}  showModel={this.state.showModel} contactUpdated={this.contactUpdated} isEdit={this.state.isEdit} contact={ this.state.isEdit ? this.state.editContactdata: new ContactInfo({})  } hideModel={this.hideModel} ></ContactForm>
        </>
    );
    }
    
}


export default Dashborad;
