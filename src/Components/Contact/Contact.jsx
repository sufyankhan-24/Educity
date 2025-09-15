import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de63e777-9615-4d7c-920c-4056751aa4d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out.</p>
        <ul>
            <li><img src={mail_icon} alt="" />contact@educity.com</li>
            <li><img src={mail_icon} alt="" />+1 123-456-789</li>
            <li><img src={location_icon} alt="" />Address</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label >Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter Your Mobile Number' required/>
            <label >Writer your message are</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span >{result}</span>
      </div>
    </div>
  )
}

export default Contact
