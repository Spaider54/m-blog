

import './ContactList.css';
import facebooklogo from "./../images/contact/facebook.png";
import twitterlogo from "./../images/contact/twitter.png";
import instagramlogo from "./../images/contact/instagram.png";
import linkedinlogo from "./../images/contact/linkedin.png";
import viberlogo from "./../images/contact/viber.png";
import whatsapplogo from "./../images/contact/whatsapp.png";


import ContactItem from './ContactItem';

const ContactList = () => {
  
  return (
    <div className="ContactList">
      <ContactItem
        url="https://www.facebook.com/walid.menghour.3"
        logo={facebooklogo}
      />
      <ContactItem url="https://twitter.com/MenghourWalid" logo={twitterlogo} />
      <ContactItem
        url="https://www.instagram.com/walid.menghour/"
        logo={instagramlogo}
      />
      <ContactItem
        url="https://www.linkedin.com/in/walid-menghour-96363a1a7/"
        logo={linkedinlogo}
      />
      <ContactItem url="#" logo={viberlogo} />
      <ContactItem url="#" logo={whatsapplogo} />
    </div>
  );

}

export default ContactList;