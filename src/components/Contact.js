
import React, {useContext} from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  
  // get rid of useForm auth id
  const [state, handleSubmit] = useForm("xpqaoqbk");
  const styles = {
    color: 'rgb(218, 216, 216)',
    alignItems: 'center'
};

  document.body.style.filter= "10px";

  if (state.succeeded) {
    // create a class for this so the section above doesn't droop down
      return (
        <div id="Contact">
      <h1 classname='name' style={styles}>Message received!<br></br> I'll be in touch shortly.</h1>
      </div>);
  }
  return (
    <div id="Contact" className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <h2 htmlFor="name">
            name
          </h2>
          <input
            id="name"
            type="name" 
            name="name" 
            required
          />
        </div>
        <div className='email'>
          <h2 htmlFor="email">
            email address 
          </h2>
          <input
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          </div>
          <div className='message'>
            <h2 htmlFor="message">
              message 
            </h2>
            <textarea
              id="message"
              name="message"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
        </div>
        <div className="btnDiv">
        <button type="submit" disabled={state.submitting} className="btn">
          <p>Submit</p>
        </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;