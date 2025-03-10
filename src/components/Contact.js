import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_vzypxvt",
        "template_ayj1ohb",
        form.current,
        "kALZ7nTexiJdZAzdW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again!");
        }
      );
  };

  return (
    <>
      <h2 className="text-4xl font-semibold text-center text-black mb-4 md:mb-6">
        Contact <span className="text-blue-600">Us</span>
      </h2>
      <section className="relative bg-white py-12 md:py-10 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-stretch lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12 mb-12 lg:mb-0">
              <div className="max-w-[570px] mx-auto lg:mx-0">
                <span className="block text-lg font-semibold text-blue-600 mb-4">
                  Get in Touch
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  LET'S CONNECT & CREATE TOGETHER
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-12">
                  We're excited to hear from you! Whether you have a question,
                  project idea, or just want to say hello - we're here to help.
                </p>

                {/* Contact Information */}
                <div className="space-y-8">
                  <ContactInfo
                    title="Our Location"
                    text="Butt Car Stand Plaza, Jalalpur Jatan Road, Karianwala, Gujrat"
                    Icon={MapPin}
                  />
                  <ContactInfo title="Phone Number" text="03325122666" Icon={Phone} />
                  <ContactInfo title="Email Address" text="devaura.pages.dev@gmail.com" Icon={Mail} />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form ref={form} onSubmit={sendEmail}>
                  <ContactInputBox type="text" name="name" placeholder="Your Name" required />
                  <ContactInputBox type="email" name="email" placeholder="Your Email" required />
                  <ContactInputBox type="text" name="phone" placeholder="Your Phone" />
                  <ContactTextArea name="message" placeholder="Your Message" required />

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 p-3 text-white transition duration-300 hover:bg-blue-700 focus:outline-none"
                  >
                    Send Message
                  </button>
                  {status && <p className="text-sm text-center mt-4">{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

/* Reusable Components */
const ContactInfo = ({ title, text, Icon }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
      <Icon size={24} />
    </div>
    <div className="ml-4">
      <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
      <p className="text-base text-gray-600">{text}</p>
    </div>
  </div>
);

const ContactTextArea = ({ name, placeholder, required }) => (
  <div className="mb-6">
    <textarea
      name={name}
      rows="5"
      placeholder={placeholder}
      required={required}
      className="w-full resize-none rounded border px-4 py-3 text-base text-gray-700 outline-none focus:border-blue-600"
    />
  </div>
);

const ContactInputBox = ({ type, name, placeholder, required }) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded border px-4 py-3 text-base text-gray-700 outline-none focus:border-blue-600"
    />
  </div>
);
