"use client";

import { useRef, useState } from "react";
// import { init, sendForm } from "emailjs-com";

// init("YOUR_EMAILJS_USER_ID");

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      setStatus("");
      // try {
      //   await sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current);
      //   setStatus("success");
      //   formRef.current.reset();
      // } catch (error) {
      //   console.error(error);
      //   setStatus("error");
      // }

      // Mock success for demo purposes
      alert("Form submitted! (This is a demo)");
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="card max-w-4xl mx-auto fade-in">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. jane.doe@example.com"
                    className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi Omar, I'd like to talk about..."
                    className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
                {status === "success" && (
                  <p className="text-green-400 mt-4">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p>
                <strong>Phone:</strong> <br />
                <a
                  href="tel:+21620681965"
                  className="text-gray-300 hover:text-blue-400"
                >
                  + (216) 20 681 965
                </a>
              </p>
              <p>
                <strong>Email:</strong> <br />
                <a
                  href="mailto:omar.bradai@insat.ucar.tn"
                  className="text-gray-300 hover:text-blue-400"
                >
                  omar.bradai@insat.ucar.tn
                </a>
              </p>
              <p>
                <strong>Address:</strong> <br />
                2074 El Mourouj3, Ben Arous, Tunisia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
