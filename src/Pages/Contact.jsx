import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uz4mb3l",
        "template_yh7e1do",
        formData,
        "yl0oNiYcSihAUe4Hx"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => toast.error("Failed to send message."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1e1b4b] to-[#312e81] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h1
            className="text-5xl font-bold mb-8 text-purple-300"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="mb-1 font-medium text-purple-200 capitalize"
                >
                  {field}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`Your ${field}`}
                  className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required={field !== "phone"}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-1 font-medium text-purple-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Type your message here..."
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-white/10 text-white text-lg font-semibold rounded-md hover:bg-purple-400 transition"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg text-lg hover:bg-purple-400 transition"
            >
              <FaFileDownload className="mr-3" /> Download Resume
            </a>
          </div>
        </div>

        <motion.div
          className="bg-white/10 rounded-2xl shadow-xl p-8 space-y-6 text-left text-purple-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            Contact Info
          </h2>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-purple-400" />
            <span>jentahrehema7@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-xl text-purple-400" />
            <span>+254745577819</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-purple-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
