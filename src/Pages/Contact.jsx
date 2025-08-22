import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
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
      className="relative min-h-screen py-20 px-6  text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-100">
              Send me a message
            </h3>

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
                    className="block mb-2 font-medium text-slate-100"
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
                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400   focus:border-transparent transition"
                    required={item.field !== "phone"}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-slate-100"
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
                  className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-transparent transition"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-slate-600 text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-slate-500/30 transition"
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

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">
                Contact Info
              </h3>

              <div className="space-y-6 text-slate-100">
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
                  { icon: FaMapMarkerAlt, text: "Nairobi, Kenya" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-slate-100 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-slate-500/20 rounded-lg group-hover:bg-slate-500/30 transition">
                      <item.icon className="text-xl text-slate-400" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-slate-300 transition"
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

            <div className="bg- backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-sl-300">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "#", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "#", color: "hover:text-gray-300" },
                  { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`p-3 bg-white/10 rounded-lg text-xl ${item.color} transition`}
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
                className="inline-flex items-center bg-slate-700 gap-3 px-6 py-4  text-white rounded-lg text-lg font-medium hover:shadow-lg  transition"
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
