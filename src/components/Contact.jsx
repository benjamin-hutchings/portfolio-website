import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState(""); // New state for company
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Encode the message with new lines preserved
    const encodedMessage = encodeURIComponent(message).replace(/%0A/g, "%0D%0A");
  
    // Encode the subject with special characters encoded
    const encodedSubject = encodeURIComponent(`Email from ${name} at ${company}`);
  
    // Construct the mailto link with the encoded subject and message
    const mailtoLink = `mailto:benjamin.a.hutchings@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;
  
    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };


  return (
    <section
      id="contact"
      className="snap-start h-screen flex items-center justify-center text-gray-600 body-font min-h-screen bg-slate-50"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Reach out to me via Email or LinkedIn!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              {" "}
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="p-2 w-full md:w-1/2">
              {" "}
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Your Company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="p-2 w-full flex justify-center gap-4">
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send Email
              </button>
              <a
                href="https://www.linkedin.com/in/benjaminhutchings1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
              >
                LinkedIn
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
