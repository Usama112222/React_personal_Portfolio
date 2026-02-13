import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaStar,
  FaUserCircle
} from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "CEO, TechSolutions Inc.",
      text: "Working with Usama was an absolute pleasure. He delivered a complex full-stack e-commerce platform with exceptional attention to detail. His React expertise and problem-solving skills are outstanding. The project was completed ahead of schedule and exceeded our expectations.",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      name: "Fatima Khan",
      role: "Product Manager, InnovateAI",
      text: "The AI/ML project Usama developed for us was revolutionary. He transformed our raw data into actionable insights with a beautiful dashboard. His understanding of machine learning algorithms and ability to explain complex concepts made collaboration seamless.",
      rating: 5,
      project: "ML Analytics Dashboard"
    },
    {
      name: "Bilal Ahmed",
      role: "Founder, TravelTech",
      text: "Usama built our travel booking platform from scratch. The user authentication, payment integration, and real-time availability features work flawlessly. His communication throughout the development was excellent, and he provided valuable suggestions to improve UX.",
      rating: 5,
      project: "Travel Booking System"
    },
    {
      name: "Sara Ali",
      role: "CTO, EduFuture",
      text: "The university website UI Usama created is simply stunning. The animations are smooth, the design is modern, and it's completely responsive. He understood our requirements perfectly and delivered a product that impressed both our team and students.",
      rating: 5,
      project: "University Website"
    },
    {
      name: "Hassan Malik",
      role: "Lead Developer, PropertyPro",
      text: "Usama's React property project was a game-changer for our real estate platform. The search filters, map integration, and property details page are incredibly well-implemented. He's a true professional who writes clean, maintainable code.",
      rating: 5,
      project: "Real Estate Platform"
    },
    {
      name: "Zainab Abbas",
      role: "Marketing Director, Brandify",
      text: "The portfolio website Usama created for our agency perfectly captures our brand identity. His attention to detail, creativity, and technical skills are impressive. He went above and beyond to ensure everything was pixel-perfect.",
      rating: 5,
      project: "Agency Portfolio"
    },
    {
      name: "Omar Farooq",
      role: "Technical Lead, CodeCraft",
      text: "Working with Usama on the Python food ordering system was fantastic. His backend architecture was solid, database design efficient, and the API documentation was clear. He's a team player who delivers quality work.",
      rating: 5,
      project: "Food Ordering System"
    }
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
    hidden: { y: 30, opacity: 0 },
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

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section
      id="testimonial"
      className="testimonial-section position-relative py-5"
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
          top: '5%', 
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
          bottom: '5%', 
          left: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, var(--gradient-2) 0%, transparent 70%)',
          opacity: 0.08,
          borderRadius: '50%',
          filter: 'blur(70px)',
          animation: 'float 30s infinite alternate-reverse'
        }} />
        
        {/* Decorative Quote Marks */}
        <FaQuoteLeft 
          className="position-absolute"
          style={{
            top: '15%',
            left: '10%',
            fontSize: '120px',
            color: 'var(--border-color)',
            opacity: 0.1,
            transform: 'rotate(-10deg)'
          }}
        />
        <FaQuoteRight 
          className="position-absolute"
          style={{
            bottom: '15%',
            right: '10%',
            fontSize: '120px',
            color: 'var(--border-color)',
            opacity: 0.1,
            transform: 'rotate(10deg)'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <span
            className="d-block mb-3"
            style={{
              background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "3px",
              fontWeight: "600"
            }}
          >
            ⭐ My Clients Say
          </span>
          
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            Testimonials
          </h2>
          
          <div 
            className="mx-auto mb-4" 
            style={{ 
              width: "100px", 
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
            Don't just take my word for it — hear what my clients and collaborators have to say about working with me.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="row g-4 mb-5 justify-content-center"
        >
          <motion.div variants={itemVariants} className="col-6 col-md-3">
            <div className="text-center p-4 rounded-4" style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
            }}>
              <h3 className="h2 fw-bold" style={{ color: "var(--gradient-1)" }}>5+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Years Experience</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-6 col-md-3">
            <div className="text-center p-4 rounded-4" style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
            }}>
              <h3 className="h2 fw-bold" style={{ color: "var(--gradient-2)" }}>25+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Projects Done</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-6 col-md-3">
            <div className="text-center p-4 rounded-4" style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
            }}>
              <h3 className="h2 fw-bold" style={{ color: "var(--gradient-3)" }}>20+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Happy Clients</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-6 col-md-3">
            <div className="text-center p-4 rounded-4" style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
            }}>
              <h3 className="h2 fw-bold" style={{ color: "#FF9F1C" }}>100%</h3>
              <p style={{ color: "var(--text-secondary)" }}>Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true
            }}
            modules={[Pagination, Autoplay, EffectCoverflow]}
            className="testimonial-swiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="h-100"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div
                    className="p-4 rounded-4 h-100 d-flex flex-column"
                    style={{
                      background: "var(--bg-card)",
                      backdropFilter: "blur(10px)",
                      border: activeIndex === idx 
                        ? "2px solid var(--accent)" 
                        : "1px solid var(--border-color)",
                      boxShadow: activeIndex === idx 
                        ? "0 0 30px var(--shadow-color)" 
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Rating Stars */}
                    <div className="d-flex gap-1 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} style={{ color: "#FFD700", fontSize: "1rem" }} />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <FaQuoteLeft 
                      style={{ 
                        color: "var(--border-color)", 
                        fontSize: "2rem",
                        marginBottom: "1rem",
                        opacity: 0.3,
                      }} 
                    />

                    {/* Testimonial Text */}
                    <p 
                      className="flex-grow-1"
                      style={{ 
                        color: "var(--text-secondary)", 
                        lineHeight: "1.8",
                        fontSize: "0.95rem",
                        fontStyle: "italic"
                      }}
                    >
                      "{t.text}"
                    </p>

                    <FaQuoteRight 
                      style={{ 
                        color: "var(--border-color)", 
                        fontSize: "1.5rem",
                        alignSelf: "flex-end",
                        marginBottom: "1rem",
                        opacity: 0.3,
                      }} 
                    />

                    {/* Project Badge */}
                    <span
                      className="badge align-self-start mb-3 px-3 py-2"
                      style={{
                        background: "var(--hover-bg)",
                        border: "1px solid var(--border-color)",
                        color: "var(--accent)",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "500",
                      }}
                    >
                      {t.project}
                    </span>

                    {/* Client Info */}
                    <div className="d-flex align-items-center gap-3 mt-2">
                      <FaUserCircle 
                        size={45} 
                        style={{ 
                          color: activeIndex === idx ? "var(--accent)" : "var(--text-secondary)",
                          transition: "color 0.3s ease"
                        }} 
                      />
                      <div>
                        <h5 className="fw-bold mb-1" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
                          {t.name}
                        </h5>
                        <p className="mb-0" style={{ 
                          color: activeIndex === idx ? "var(--accent)" : "var(--text-secondary)", 
                          fontSize: "0.85rem",
                        }}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            
            {/* Autoplay Progress Indicator */}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-5 pt-4"
        >
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Ready to start your project?
          </p>
          <motion.a
            href="#contact"
            className="btn btn-lg px-5 py-3"
            style={{
              background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
              border: "none",
              borderRadius: "50px",
              color: "white",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 10px 30px var(--shadow-color)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px var(--shadow-color)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Work With Me 🚀
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonial-section {
          scroll-margin-top: 70px;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 20px) rotate(10deg); }
        }

        .testimonial-swiper {
          padding: 20px 10px 50px !important;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: var(--accent);
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, var(--gradient-1), var(--gradient-2));
          opacity: 1;
          width: 30px;
          border-radius: 10px;
        }

        .autoplay-progress {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 10;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: var(--accent);
        }

        .autoplay-progress svg {
          --progress: 0;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          stroke-width: 4px;
          stroke: var(--accent);
          fill: none;
          stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
          stroke-dasharray: 125.6;
          transform: rotate(-90deg);
        }

        .autoplay-progress span {
          position: absolute;
          font-size: 0.7rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .testimonial-swiper {
            padding: 10px 5px 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;