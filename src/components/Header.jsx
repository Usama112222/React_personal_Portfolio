import React, { useState, useEffect, useRef } from "react";
import { 
  FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCommentDots, 
  FaEnvelope, FaSun, FaMoon, FaDownload, FaShare, FaCode,
  FaArrowUp
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
      
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((s) => {
        const top = s.offsetTop - 150;
        const height = s.offsetHeight;
        const id = s.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          setActive(id);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sharePortfolio = async () => {
    const shareData = {
      title: 'My Portfolio',
      text: 'Check out my amazing portfolio!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Share canceled:', err);
    }
    setShareOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "work", label: "Work", icon: <FaBriefcase /> },
    { id: "testimonial", label: "Testimonials", icon: <FaCommentDots /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))`,
          width: `${progress}%`,
          zIndex: 10000,
          boxShadow: `0 0 20px var(--gradient-1)`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />

      <div 
        style={{ 
          paddingLeft: isMobile ? "3%" : "20%", 
          paddingRight: isMobile ? "3%" : "20%",
          position: "fixed",
          top: isMobile ? "10px" : "20px",
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: "all 0.3s ease",
        }}
        className="navbar-wrapper"
      >
        <motion.nav
          ref={navRef}
          className="navbar navbar-expand-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          style={{
            minHeight: isMobile ? "55px" : (scrolled ? "70px" : "90px"),
            backgroundColor: "var(--navbar-bg)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
            transition: "all 0.3s ease",
            borderBottom: "1px solid var(--border-color)",
            boxShadow: scrolled ? "var(--box-shadow-lg)" : "var(--box-shadow-sm)",
            borderRadius: isMobile ? "50px" : "100px",
            border: "1px solid var(--border-color)",
            padding: isMobile ? "0 12px" : "0 30px",
            width: "100%",
          }}
        >
          <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center" style={{ gap: isMobile ? "4px" : "0", flex: 1 }}>
              <motion.a
                className="navbar-brand d-flex align-items-center"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  marginLeft: "0",
                  padding: "0",
                  marginRight: isMobile ? "4px" : "0",
                }}
              >
                {isMobile ? (
                  <div className="d-flex align-items-center" style={{ gap: "4px" }}>
                    <span className="gradient-text" style={{
                      fontSize: scrolled ? "0.95rem" : "1rem",
                      fontWeight: "700",
                      letterSpacing: "0.3px",
                      whiteSpace: "nowrap",
                    }}>
                      USAMA LIAQAT
                    </span>
                    <span style={{
                      fontSize: "0.6rem",
                      padding: "2px 6px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "12px",
                      color: "var(--accent)",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      lineHeight: "1.2",
                    }}>
                      SE
                    </span>
                  </div>
                ) : (
                  <div className="position-relative">
                    <motion.img
                      src="/img/logo.png"
                      alt="Logo"
                      style={{ 
                        height: scrolled ? "60px" : "75px", 
                        objectFit: "contain",
                        transition: "all 0.3s ease",
                        filter: `drop-shadow(0 0 15px var(--accent))`,
                      }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    />
                  </div>
                )}
              </motion.a>
            </div>

            <div className="d-none d-lg-flex align-items-center gap-1">
              {links.map((l, index) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  className="btn position-relative px-3 py-2"
                  style={{
                    color: active === l.id ? "var(--accent)" : "var(--text-primary)",
                    border: "none",
                    background: active === l.id ? "rgba(34,211,238,0.1)" : "transparent",
                    borderRadius: "50px",
                    fontWeight: active === l.id ? "600" : "500",
                    fontSize: "0.95rem",
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "var(--accent)" }}>{l.icon}</span>
                    {l.label}
                  </span>
                  {active === l.id && (
                    <motion.span
                      layoutId="underline"
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "var(--accent)",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "2px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="d-flex align-items-center" style={{ gap: isMobile ? "6px" : "12px" }}>
              <motion.button
                className="btn rounded-circle p-1 d-flex align-items-center justify-content-center"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: isMobile ? "30px" : "40px",
                  height: isMobile ? "30px" : "40px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                  minWidth: isMobile ? "30px" : "40px",
                  padding: 0,
                }}
              >
                {theme === "dark" ? <FaSun size={isMobile ? 12 : 16} /> : <FaMoon size={isMobile ? 12 : 16} />}
              </motion.button>

              {!isMobile && (
                <div className="position-relative">
                  <motion.button
                    className="btn rounded-circle p-2 d-flex align-items-center justify-content-center"
                    onClick={() => setShareOpen(!shareOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      color: "var(--accent)",
                    }}
                  >
                    <FaShare size={16} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {shareOpen && (
                      <motion.div
                        className="position-absolute end-0 mt-3 p-3 rounded-4"
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        style={{
                          background: "var(--navbar-bg)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "20px",
                          zIndex: 10000,
                          width: "220px",
                          boxShadow: "var(--box-shadow-xl)",
                        }}
                      >
                        <div className="d-flex flex-column gap-2">
                          <motion.button
                            className="btn w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                            onClick={sharePortfolio}
                            whileHover={{ background: "var(--card-hover-bg)" }}
                            style={{
                              background: "var(--bg-card)",
                              border: "1px solid var(--border-color)",
                              color: "var(--text-primary)",
                              borderRadius: "50px",
                            }}
                          >
                            <FaShare size={14} /> Share Portfolio
                          </motion.button>
                          <motion.button
                            className="btn w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                            onClick={downloadResume}
                            whileHover={{ boxShadow: `0 0 20px var(--accent)` }}
                            style={{
                              background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                              border: "none",
                              color: "white",
                              borderRadius: "50px",
                            }}
                          >
                            <FaDownload size={14} /> Download Resume
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {isMobile && (
                <motion.button
                  className="btn rounded-circle p-1 d-flex align-items-center justify-content-center"
                  onClick={downloadResume}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                    border: "none",
                    color: "white",
                    minWidth: "30px",
                    padding: 0,
                  }}
                >
                  <FaDownload size={12} />
                </motion.button>
              )}

              {isMobile && (
                <motion.button
                  className="btn rounded-circle p-1 d-flex align-items-center justify-content-center"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "30px",
                    height: "30px",
                    background: menuOpen 
                      ? "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))" 
                      : "var(--bg-card)",
                    border: menuOpen ? "none" : "1px solid var(--border-color)",
                    color: menuOpen ? "white" : "var(--accent)",
                    minWidth: "30px",
                    padding: 0,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div
                        key="times"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaTimes size={12} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="bars"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaBars size={12} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </div>
          </div>
        </motion.nav>

        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              className="d-lg-none mt-2"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "var(--navbar-bg)",
                backdropFilter: "blur(20px)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "12px",
                width: "100%",
                boxShadow: "var(--box-shadow-xl)",
              }}
            >
              <div className="d-flex flex-column gap-1">
                {links.map((l, index) => (
                  <motion.a
                    key={l.id}
                    href={`#${l.id}`}
                    className="btn w-100 d-flex align-items-center justify-content-start gap-3 py-2 px-3"
                    style={{
                      color: active === l.id ? "var(--accent)" : "var(--text-primary)",
                      background: active === l.id ? "rgba(34,211,238,0.1)" : "transparent",
                      borderRadius: "30px",
                      fontSize: "0.9rem",
                    }}
                    whileHover={{ background: "var(--card-hover-bg)", x: 3 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      document.querySelector(`#${l.id}`).scrollIntoView({ 
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "1rem" }}>
                      {l.icon}
                    </span>
                    {l.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="btn rounded-circle position-fixed d-flex align-items-center justify-content-center"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            style={{
              bottom: isMobile ? "20px" : "30px",
              right: isMobile ? "20px" : "30px",
              width: isMobile ? "40px" : "50px",
              height: isMobile ? "40px" : "50px",
              background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
              border: "none",
              color: "white",
              boxShadow: `0 5px 20px var(--accent)`,
              zIndex: 9998,
            }}
          >
            <FaArrowUp size={isMobile ? 16 : 20} />
          </motion.button>
        )}
      </AnimatePresence>

      {!scrolled && !isMobile && (
        <motion.div
          className="position-fixed d-none d-md-flex align-items-center"
          style={{
            bottom: "30px",
            left: "30px",
            background: "var(--navbar-bg)",
            backdropFilter: "blur(10px)",
            padding: "12px 24px",
            borderRadius: "50px",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            fontSize: "14px",
            zIndex: 9997,
            boxShadow: "var(--box-shadow-md)",
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.8, x: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <FaCode className="me-2" style={{ color: "var(--accent)" }} /> 
          Press <kbd style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "4px",
            padding: "2px 6px",
            margin: "0 4px",
            color: "var(--accent)",
          }}>⌘K</kbd> for commands
        </motion.div>
      )}

      <style jsx>{`
        .navbar-wrapper {
          transition: all 0.3s ease;
        }
        
        .navbar {
          transition: all 0.3s ease;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
          outline: none;
        }
        
        @media (max-width: 576px) {
          .navbar-wrapper {
            padding-left: 3% !important;
            padding-right: 3% !important;
            top: 8px !important;
          }
          
          .navbar {
            min-height: 48px !important;
            padding: 0 10px !important;
          }
        }

        @media (max-width: 380px) {
          .navbar-brand span:first-child {
            font-size: 0.85rem !important;
          }
          
          .navbar-brand span:last-child {
            font-size: 0.55rem !important;
            padding: 1px 4px !important;
          }
          
          .btn.rounded-circle {
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
          }
        }

        kbd {
          font-family: var(--font-family-mono);
        }
      `}</style>
    </>
  );
};

export default Header;