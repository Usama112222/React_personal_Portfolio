import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaComment,
  FaClock
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [activeField, setActiveField] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs.sendForm(
      'service_8oqlc5m',
      'template_1izc53k',
      formRef.current,
      'vhNKEBwHUDL1z4U3E'
    )
      .then((result) => {
        setStatus({
          type: "success",
          message: "✨ Message sent successfully! I'll get back to you soon."
        });
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Please try again or contact me directly via email."
        });
        setLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ukiyani318@gmail.com",
      link: "mailto:ukiyani318@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+92 348 8923267",
      link: "https://api.whatsapp.com/send?phone=923488923267",
      color: "#25D366",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 348 8923267",
      link: "tel:+923488923267",
      color: "var(--accent)",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Pakistan",
      link: "#",
      color: "var(--gradient-2)",
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Usama112222", color: "#333", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/usama-liaquat-a55011309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "#0077B5", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "https://x.com/UsamaLiaqu99682", color: "#1DA1F2", label: "Twitter" },
    { icon: <FaEnvelope />, link: "mailto:ukiyani318@gmail.com", color: "#EA4335", label: "Email" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="contact"
      className="contact-section position-relative py-5"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      {/* Animated Background */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="position-absolute" style={{ 
          top: '10%', 
          right: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, var(--gradient-1) 0%, transparent 70%)',
          opacity: 0.08,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 25s infinite alternate'
        }} />
        <div className="position-absolute" style={{ 
          bottom: '10%', 
          left: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, var(--gradient-2) 0%, transparent 70%)',
          opacity: 0.08,
          borderRadius: '50%',
          filter: 'blur(70px)',
          animation: 'float 30s infinite alternate-reverse'
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            Get In Touch
          </h2>
          <div 
            className="mx-auto mb-4" 
            style={{ 
              width: "120px", 
              height: "4px", 
              background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
              borderRadius: "2px"
            }} 
          />
          <p 
            className="lead mx-auto"
            style={{
              maxWidth: "700px",
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: "1.8"
            }}
          >
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Contact Information Cards */}
          <motion.div 
            className="col-lg-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="d-flex flex-column gap-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <a
                    href={info.link}
                    target={info.link !== "#" ? "_blank" : "_self"}
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="d-flex align-items-center p-4 rounded-4"
                      style={{
                        background: "var(--bg-card)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid var(--border-color)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--hover-bg)";
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.boxShadow = "0 10px 30px var(--shadow-color)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--bg-card)";
                        e.currentTarget.style.borderColor = "var(--border-color)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="rounded-3 p-3 me-3"
                        style={{
                          background: "var(--hover-bg)",
                          border: "1px solid var(--border-color)",
                          color: info.color,
                        }}
                      >
                        {React.cloneElement(info.icon, { size: 24 })}
                      </div>
                      <div>
                        <h6 className="mb-1" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                          {info.title}
                        </h6>
                        <h5 className="mb-0 fw-semibold" style={{ color: "var(--text-primary)" }}>
                          {info.value}
                        </h5>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="mt-2"
              >
                <h5 className="mb-3" style={{ color: "var(--text-primary)" }}>
                  Connect With Me
                </h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-primary)",
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{
                        scale: 1.1,
                        background: social.color,
                        borderColor: social.color,
                        boxShadow: `0 0 20px ${social.color}`,
                        color: "white",
                      }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      {React.cloneElement(social.icon, { size: 22 })}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="mt-3 p-4 rounded-4"
                style={{
                  background: "var(--hover-bg)",
                  border: "1px solid var(--border-color)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle"
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#22c55e",
                      boxShadow: "0 0 15px #22c55e",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <div>
                    <h6 className="mb-1" style={{ color: "var(--text-primary)" }}>Available for work</h6>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 0 }}>
                      Usually responds within 24 hours
                    </p>
                  </div>
                  <FaClock className="ms-auto" style={{ color: "var(--text-secondary)" }} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              className="p-4 p-lg-5 rounded-4"
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--border-color)",
                height: "100%",
              }}
            >
              <h3 className="fw-bold mb-4" style={{ color: "var(--text-primary)" }}>Send Me a Message</h3>
              
              {/* Status Alert */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`alert d-flex align-items-center gap-2 mb-4`}
                  style={{
                    background: status.type === "success" 
                      ? "rgba(34,197,94,0.1)" 
                      : "rgba(239,68,68,0.1)",
                    border: status.type === "success"
                      ? "1px solid rgba(34,197,94,0.3)"
                      : "1px solid rgba(239,68,68,0.3)",
                    color: "var(--text-primary)",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle style={{ color: "#22c55e" }} />
                  ) : (
                    <FaTimesCircle style={{ color: "#ef4444" }} />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="position-relative">
                    <FaUser 
                      className="position-absolute"
                      style={{
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: activeField === "name" ? "var(--accent)" : "var(--text-secondary)",
                        transition: "color 0.3s ease",
                        zIndex: 10,
                      }}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField("")}
                      className="form-control form-control-lg"
                      required
                      style={{
                        background: "var(--bg-primary)",
                        border: `2px solid ${
                          activeField === "name" ? "var(--accent)" : "var(--border-color)"
                        }`,
                        color: "var(--text-primary)",
                        padding: "14px 14px 14px 50px",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="position-relative">
                    <FaEnvelope 
                      className="position-absolute"
                      style={{
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: activeField === "email" ? "var(--accent)" : "var(--text-secondary)",
                        transition: "color 0.3s ease",
                        zIndex: 10,
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField("")}
                      className="form-control form-control-lg"
                      required
                      style={{
                        background: "var(--bg-primary)",
                        border: `2px solid ${
                          activeField === "email" ? "var(--accent)" : "var(--border-color)"
                        }`,
                        color: "var(--text-primary)",
                        padding: "14px 14px 14px 50px",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="position-relative">
                    <FaComment 
                      className="position-absolute"
                      style={{
                        left: "16px",
                        top: "20px",
                        color: activeField === "message" ? "var(--accent)" : "var(--text-secondary)",
                        transition: "color 0.3s ease",
                        zIndex: 10,
                      }}
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField("")}
                      className="form-control"
                      rows="6"
                      required
                      style={{
                        background: "var(--bg-primary)",
                        border: `2px solid ${
                          activeField === "message" ? "var(--accent)" : "var(--border-color)"
                        }`,
                        color: "var(--text-primary)",
                        padding: "16px 16px 16px 50px",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2 py-3"
                  style={{
                    background: loading 
                      ? "var(--text-secondary)" 
                      : "linear-gradient(45deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
                    border: "none",
                    borderRadius: "50px",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                  }}
                  whileHover={!loading ? { 
                    scale: 1.02,
                    boxShadow: "0 0 30px var(--shadow-color)",
                  } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center mt-4 mb-0" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Your email will be sent directly to <strong style={{ color: "var(--accent)" }}>ukiyani318@gmail.com</strong>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          scroll-margin-top: 70px;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 20px) rotate(10deg); }
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .form-control:focus {
          box-shadow: 0 0 25px var(--shadow-color);
          outline: none;
          background: var(--hover-bg) !important;
        }

        .form-control::placeholder {
          color: var(--text-secondary);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;