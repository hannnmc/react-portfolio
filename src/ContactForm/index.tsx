import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <div className="email-form-wrapper p-12 rounded-lg shadow text-start mt-32 min-w-[372px] self-center font-Mont sm:mt-20">
    <form
      className="flex flex-col"
      action="https://formspree.io/f/mwkjvood"
      method="POST"
    >
      <div className="flex justify-between gap-0 sm:gap-2">
        <div className="w-1/2 space-y-3">
          <label htmlFor="name" className="mb-1">
            NAME
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="form-input w-full h-10 border border-gray-400 rounded-l px-2 focus:outline-none focus:border-blue-500 sm:rounded"
          />
        </div>
        <div className="w-1/2 space-y-3">
          <label htmlFor="email" className="mb-1">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-input w-full h-10 border border-gray-400 rounded-r px-2 focus:outline-none focus:border-blue-500 border-l-0 sm:rounded sm:border-l"
          />
        </div>
      </div>
      <label htmlFor="message" className="my-4">
        MESSAGE
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="form-textarea w-full border border-gray-400 rounded px-2 py-1 focus:outline-none focus:border-blue-500 leading-5"
      ></textarea>
      {/* other form fields go here */}
      <button
        type="submit"
        className="email-form-button  border-none rounded px-4 py-3 mt-8"
      >
        SEND
      </button>
    </form>
  </div>
);

export default ContactForm;
