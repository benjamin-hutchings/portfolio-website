import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="snap-start h-screen flex items-center justify-center text-gray-600 body-font min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">How you can reach me.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form action="#" method="POST" className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" />
            </div>
            <div className="p-2 w-1/2">
              <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" />
            </div>
            <div className="p-2 w-full">
              <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
