
import React, {useContext} from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  
  // get rid of useForm auth id
  const [state, handleSubmit] = useForm("xwkaepkv"); //TODO new auth id
  const styles = {
    color: 'rgb(218, 216, 216)',
    marginTop: '40%',
    marginBottom: '25%',
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
    <div id="Contact" className="contact-form pageSpace">
      <form onSubmit={handleSubmit}>
        <h2 htmlFor="name">
          Name
        </h2>
        <input
          id="name"
          type="name" 
          name="name" 
          required
        />
        <h2 htmlFor="email">
          Email Address 
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
        <h2 htmlFor="message">
          Message 
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
        <button type="submit" disabled={state.submitting} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;