import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaClock,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      .catch(() => toast.error("Failed to send message."))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 text-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a product idea, redesign, or frontend problem to solve? Send a
            message and I will get back to you quickly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-white backdrop-blur rounded-2xl p-8 shadow-sm border border-slate-200"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-slate-900">
              Send me a message
            </h3>
            <p className="text-slate-500 mb-6">
              Share your goal, timeline, and what you need built.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {[
                { field: "name", type: "text", label: "Your Name" },
                { field: "email", type: "email", label: "Email Address" },
                {
                  field: "phone",
                  type: "tel",
                  label: "Phone Number (Optional)",
                },
              ].map((item) => (
                <div key={item.field} className="relative">
                  <label
                    htmlFor={item.field}
                    className="block mb-2 font-medium text-slate-900"
                  >
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    id={item.field}
                    name={item.field}
                    value={formData[item.field]}
                    onChange={handleInputChange}
                    placeholder={item.label}
                    className="w-full p-4 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition"
                    required={item.field !== "phone"}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-slate-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-slate-900 text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white backdrop-blur rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Contact Info
              </h3>

              <div className="space-y-6 text-slate-700">
                {[
                  {
                    icon: FaEnvelope,
                    text: "jentahrehema7@gmail.com",
                    href: "mailto:jentahrehema7@gmail.com",
                  },
                  {
                    icon: FaPhone,
                    text: "+254745577819",
                    href: "tel:+254745577819",
                  },
                  { icon: FaClock, text: "Response time: within 24 hours" },
                  { icon: FaMapMarkerAlt, text: "Nairobi, Kenya" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-slate-700 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition">
                      <item.icon className="text-xl text-slate-700" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-slate-900 transition"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/jentah-rehema-a48a762a8/",
                    color: "hover:text-slate-900",
                  },
                  {
                    icon: FaGithub,
                    href: "https://github.com/remmy300",
                    color: "hover:text-slate-900",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-100 rounded-lg text-xl text-slate-700 ${item.color} transition`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center bg-slate-900 border border-slate-900 gap-3 px-6 py-4 text-white rounded-lg text-lg font-medium hover:bg-slate-700 transition"
              >
                <FaFileDownload /> Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
