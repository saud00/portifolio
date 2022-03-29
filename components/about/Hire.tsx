import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

type Props = {}

const Hire = (props: Props) => {
    const form:any = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3j7ktvi', 'template_iukr6jq', form.current, 'g8FzxqFdkr5jFWodW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset()
    };
  
  return (
    <div className='p-2  sm:p-5 bg-inherit  '>
        <div className='text-4xl sm:text-5xl font-extrabold flex scale-y-50 font-Staatliches my-5 '>
            Want to hire me?
        </div>
            <form ref={form} onSubmit={sendEmail}>
                <fieldset className='border border-solid bg-zinc-800 border-x-gray-500 flex flex-col gap-5 text-center justify-center mx-auto w-[90%] sm:w-[50%] p-5 sm:p-10 rounded' >
           <div className='flex flex-row '>
                <label className='basis-1/3'>Name</label>
                <input type="name" name="name" className='form-input px-4 py-3 block w-full basis-2/3 sm:text-sm border border-gray-300 rounded-md '/>
           </div>
           <div className='flex flex-row '>

                <label className='basis-1/3' >Subject</label>
                <input type="text" name="subject" className='form-input px-4 py-3 block w-full basis-2/3 sm:text-sm border border-gray-300 rounded-md '/>
           </div>
           <div className='flex flex-row '>

                <label className='basis-1/3'>Message</label>
                <textarea rows={4} cols={4} name="message" className='shadow-sm basis-2/3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'></textarea>
           </div>
           <div className='flex flex-row w-full p-4'>
                <button type="submit" value="Send" className='bg-gray-700 hover:bg-white hover:text-black w-[80%] sm:w-[40%] p-3 text-md mx-auto rounded'>Submit</button>

           </div>
           </fieldset>

            </form>
    </div>
  )
}

export default Hire

