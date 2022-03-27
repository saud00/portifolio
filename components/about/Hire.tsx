import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

type Props = {}

const Hire = (props: Props) => {
    const form:any = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_iukr6jq', form.current, 'g8FzxqFdkr5jFWodW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset()
    };
  
  return (
    <div className='p-5 bg-white text-black'>
        <div className='text-4xl sm:text-5xl font-extrabold flex scale-y-50 font-Staatliches p-5'>
            Want to hire me?
        </div>
            <form ref={form} onSubmit={sendEmail}>
           
                <input type="name" name="to_name" className='form-input px-4 py-3 rounded '/>
                <input type="text" name="subject" className='form-input px-4 py-3 rounded-sm '/>
                <input type="text" name="message" className='form-textarea px-4 py-3 rounded-t-sm '/>
                <input type="submit" value="Send" />

            </form>
    </div>
  )
}

export default Hire

{/*<label>Name</label>
     <input type="text" name="to_name" />
     <label>Subject</label>
     <input type="text" name="subject" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" /> */}
