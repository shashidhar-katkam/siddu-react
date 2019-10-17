import {ContactInfo, IContactInfo} from '../Util/util';
import {allContacts} from '../Util/constant';


export default class ContactService {
  
  getAllContacts() {
    console.log(allContacts);
    return allContacts;
  };

  getContactById(id: number) {
    let contactInfo =new ContactInfo({});
    for (var contact of allContacts) {
      if(contact.Id === id){
        contactInfo = contact;
      }
    }
      return contactInfo;
  };

  
  addContact(contact:IContactInfo ){
    contact.Id = allContacts[allContacts.length-1].Id +1;
    allContacts.push(contact);
    return allContacts[allContacts.length-1];
  
  }
  
  deleteContactById(id: number) {
    for (let i=0; i< allContacts.length; i++) {
      if(allContacts[i].Id === id){
          allContacts.splice(i,1);
      }
    }
  };
 
  updateContact(contact:IContactInfo) {
    for (let i=0; i< allContacts.length; i++) {
      if(allContacts[i].Id ===contact.Id){
         allContacts[i] = contact
         return allContacts[i];
      }
    }
    };

}  