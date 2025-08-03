"use client";

import { useRef, useState } from "react";
// 1. Import the correct EmailJS package
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const serviceId = "service_rpvslne";
  const templateId = "template_dqsibul";
  const publicKey = "QhoY9h2lpG987Ab_m";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      setIsSubmitting(true);
      setStatus("");
      // add current time date to the form as a hidden input
      const dateInput = document.createElement("input");
      dateInput.type = "hidden";
      dateInput.name = "time";
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      dateInput.value = `${date} ${time}`;
      formRef.current.appendChild(dateInput);

      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setStatus("success");
            formRef.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            setStatus("error");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
          // Remove the hidden input after submission
          formRef.current?.removeChild(dateInput);
        });
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
              {/* 4. Pass the ref to your form */}
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
                {/* 5. Add a loading state to the button for better UX */}
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="text-green-400 mt-4">
                    Message sent successfully! Thank you for reaching out.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-4">
                    Failed to send message. Please try again later or contact me
                    directly via email.
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
                  href="mailto:omar.bradai.pro@gmail.com"
                  className="text-gray-300 hover:text-blue-400"
                >
                  omar.bradai.pro@gmail.com
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
