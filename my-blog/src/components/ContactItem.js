

import './ContactItem.css';

const ContactItem = ({logo,url}) => {
  
  return (<div className="ContactItem">
    <a href={url}>
    <img src={logo} alt="social media" />
    </a>
  </div>);
}

export default ContactItem;