import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaHeart,
  FaCode,
  FaArrowUp,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Usama112222", label: "GitHub", color: "#333" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/usama-liaquat-a55011309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", color: "#0077B5" },
    { icon: <FaTwitter />, href: "https://x.com/UsamaLiaqu99682", label: "Twitter", color: "#1DA1F2" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/1XXaQe6Ew4/", label: "Facebook", color: "#4267B2" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/iamkayani1?utm_source=qr&igsh=ZHM0YW01anJ3MGdv", label: "Instagram", color: "#E4405F" },
    { icon: <FaEnvelope />, href: "mailto:ukiyani318@gmail.com", label: "Email", color: "#EA4335" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <footer
      className="footer position-relative py-5"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        borderTop: "1px solid var(--border-color)",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="position-absolute" style={{ 
          top: '10%', 
          left: '5%', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, var(--gradient-1) 0%, transparent 70%)',
          opacity: 0.05,
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 20s infinite alternate'
        }} />
        <div className="position-absolute" style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, var(--gradient-2) 0%, transparent 70%)',
          opacity: 0.05,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 25s infinite alternate-reverse'
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="row g-4 justify-content-center"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-lg-4 col-md-6 text-center text-lg-start">
            <div className="d-flex flex-column h-100">
              <motion.h2 
                className="fw-bold mb-3 gradient-text"
                style={{ fontSize: "2rem" }}
                whileHover={{ scale: 1.05 }}
              >
                Usama
              </motion.h2>
              
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                Full-Stack Developer & AI/ML Engineer specializing in building exceptional digital experiences.
              </p>
              
              <div className="d-flex gap-2 justify-content-center justify-content-lg-start mt-auto">
                <div className="d-flex align-items-center gap-1" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  <FaCode style={{ color: "var(--accent)" }} />
                  <span>Crafted with</span>
                  <FaHeart style={{ color: "#ff4d4d", margin: "0 4px" }} />
                  <span>for innovation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="col-lg-2 col-md-6 text-center">
            <h5 className="fw-bold mb-4" style={{ 
              color: "var(--accent)",
              position: "relative",
              display: "inline-block"
            }}>
              Navigation
              <span style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "30px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))",
                borderRadius: "2px"
              }} />
            </h5>
            
            <ul className="list-unstyled">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={idx} 
                  className="mb-3"
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                    }}
                    className="nav-link-footer"
                    onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
                    onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-lg-3 col-md-6 text-center">
            <h5 className="fw-bold mb-4" style={{ 
              color: "var(--accent)",
              position: "relative",
              display: "inline-block"
            }}>
              Connect With Me
              <span style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "30px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))",
                borderRadius: "2px"
              }} />
            </h5>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    fontSize: "1.2rem",
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
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mt-4"
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              <span style={{ color: "var(--accent)", marginRight: "8px" }}>🚀</span>
              Available for freelance work
            </motion.div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div variants={itemVariants} className="col-lg-3 col-md-6 text-center">
            <h5 className="fw-bold mb-4" style={{ 
              color: "var(--accent)",
              position: "relative",
              display: "inline-block"
            }}>
              Quick Contact
              <span style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "30px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))",
                borderRadius: "2px"
              }} />
            </h5>
            
            <div className="d-flex flex-column gap-3">
              <motion.a
                href="mailto:ukiyani318@gmail.com"
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                whileHover={{ color: "var(--accent)", x: 5 }}
              >
                <FaEnvelope style={{ color: "var(--accent)" }} />
                ukiyani318@gmail.com
              </motion.a>
              
              <motion.a
                href="https://api.whatsapp.com/send?phone=923488923267"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                whileHover={{ color: "#25D366", x: 5 }}
              >
                <span style={{ color: "#25D366" }}>📱</span>
                +92 348 8923267
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border-color), var(--accent), var(--border-color), transparent)",
            margin: "40px 0 30px",
            width: "100%",
          }}
        />

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row align-items-center"
        >
          <motion.div variants={itemVariants} className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              © {new Date().getFullYear()} Usama. All rights reserved.
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Built with <FaHeart style={{ color: "#ff4d4d", margin: "0 4px" }} /> using React
              </span>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="btn rounded-circle p-0 d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--hover-bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                }}
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                  borderColor: "transparent",
                  color: "white",
                  boxShadow: "0 0 20px var(--shadow-color)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          scroll-margin-top: 70px;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 20px) rotate(10deg); }
        }

        .nav-link-footer {
          position: relative;
          display: inline-block;
        }

        .nav-link-footer::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-link-footer:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;