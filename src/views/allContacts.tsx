import * as React from "react";
import  {IContactInfo} from '../Util/util';


interface Props {
    allContacts: IContactInfo[];
    onClick: (ev: React.MouseEvent<HTMLDivElement>, id:any) => void;
}

class AllContacts extends React.Component<Props>  {

   
  render(){
    const data = this.props.allContacts;
    const contactsList = data.map((contact) =>
    <div className="contact-item" key ={contact.Id} onClick={ (a) => {this.props.onClick(a, contact.Id);}} >
          <p className="name" >{contact.FullName}</p>
          <p className="email">{contact.Email}</p>
          <p className="phno">{contact.MobileNo}</p>
    </div>);

    return (
      <>
        <h5>CONTACTS</h5>
        <div >
           {contactsList}
        </div>
      </>
  );
  }
}


export default AllContacts;

