import * as React from "react";
import { IContactInfo} from '../Util/util';

interface IState {
}

interface IProps {
  record : IContactInfo;
  editContact:  (ev: React.MouseEvent<HTMLLIElement>, id:any ) => void;
  deleteContact:(ev: React.MouseEvent<HTMLLIElement>, id:any ) => void;
  //(ev: React.MouseEvent<HTMLLIElement>) => void;
}


class ContactDetails extends React.Component<IProps, IState>  {
    
    render(){
    const contact = this.props.record;
    let  std;
    const linkTarget= "_blank";
    if(contact){
      std = (
        <>
        <div className="right-container">
        <div className="row">
           <div className="col-sm-8">
               <h1>{contact.FullName} </h1>
               <p>{contact.Email}</p>
               <p className="mobile">{contact.MobileNo}</p>
               <p className="landline">{contact.landline}</p>
               <p>Website: <a href={contact.websiteUrl} target={linkTarget} >{contact.websiteDesc} </a></p>
               <p>{contact.Address}</p>
            </div>
            <div className="col-sm-4">
               <ul className="edit-menu">
               <li className="btn-edit btn" onClick={ (a) =>{this.props.editContact(a, contact.Id)} } ><i className='fas fa-pen'></i>Edit</li>
               <li className="btn btn-delete" onClick={ (a) =>{this.props.deleteContact(a, contact.Id)} } ><i className='fas fa-trash-alt'></i>Delete</li>
               </ul>
            </div>
        </div>
     </div>
     </>
       );
    }else{
      std = (
        <p>
          No data...
        </p>
      )
    }
   
      return (
    
               <>
                {std}
               </>
             );
    }
    
}


export default ContactDetails;

