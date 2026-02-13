import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiTensorflow,
  SiDocker,
  SiPostgresql,
  SiExpress,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { 
  FaBrain, 
  FaRobot, 
  FaCloud, 
  FaDatabase, 
  FaCode, 
  FaLaptopCode,
  FaAws,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaStar
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCards = [
    { 
      icon: SiReact, 
      title: "Frontend Development", 
      experience: "2+ Years", 
      description: "Building responsive, interactive UIs with React, Tailwind CSS, and modern JavaScript frameworks.",
      color: "var(--gradient-1)",
    },
    { 
      icon: SiNodedotjs, 
      title: "Backend Development", 
      experience: "1.5+ Years", 
      description: "Scalable server-side applications with Node.js, Express, Python, Django, and RESTful APIs.",
      color: "var(--gradient-2)",
    },
    { 
      icon: SiMongodb, 
      title: "Database Management", 
      experience: "2+ Years", 
      description: "Efficient data modeling and querying with MongoDB, MySQL, PostgreSQL, and Redis.",
      color: "var(--gradient-3)",
    },
    { 
      icon: FaCloud, 
      title: "DevOps & Cloud", 
      experience: "1+ Year", 
      description: "Deployment, CI/CD pipelines, Docker containers, and AWS cloud services.",
      color: "var(--gradient-1)",
    },
    { 
      icon: FaBrain, 
      title: "AI / ML Engineering", 
      experience: "1+ Year", 
      description: "Machine learning models, TensorFlow, PyTorch, computer vision, and NLP solutions.",
      color: "var(--gradient-2)",
    },
    { 
      icon: SiDocker, 
      title: "Full Stack Integration", 
      experience: "2+ Years", 
      description: "End-to-end application development with seamless frontend-backend integration.",
      color: "var(--gradient-3)",
    },
  ];

  const expertiseIcons = [
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiReact, name: "React", color: "#61DBFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
    { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: FaRobot, name: "AI/ML", color: "var(--gradient-2)" },
    { icon: FaDatabase, name: "Databases", color: "#00758F" },
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
        damping: 12,
      }
    }
  };

  return (
    <section 
      id="about" 
      className="about-section position-relative py-5"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="position-absolute" style={{ 
          top: '10%', 
          right: '5%', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, var(--gradient-1) 0%, transparent 70%)',
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 20s infinite alternate'
        }} />
        <div className="position-absolute" style={{ 
          bottom: '10%', 
          left: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, var(--gradient-2) 0%, transparent 70%)',
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 25s infinite alternate-reverse'
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            About Me
          </h2>
          <div 
            className="mx-auto mb-4" 
            style={{ 
              width: "80px", 
              height: "4px", 
              background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
              borderRadius: "2px",
            }} 
          />
          <p 
            className="lead mx-auto"
            style={{
              maxWidth: "800px",
              color: "var(--text-secondary)",
              fontSize: "1.25rem",
              lineHeight: "1.8",
            }}
          >
            Passionate full-stack developer specializing in responsive web applications 
            and intelligent AI/ML solutions. I turn complex problems into elegant, 
            user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="row g-4 mb-5 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { value: "20+", label: "Projects Completed", icon: FaLaptopCode },
            { value: "3+", label: "Years Experience", icon: FaBriefcase },
            { value: "15+", label: "Happy Clients", icon: FaUsers },
            { value: "100%", label: "Satisfaction", icon: FaStar },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div key={idx} className="col-6 col-md-3" variants={itemVariants}>
                <div 
                  className="text-center p-4 rounded-4"
                  style={{
                    background: "var(--bg-card)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--border-color)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={35} color="var(--accent)" className="mb-3" />
                  <h3 className="h2 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>{stat.value}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="row g-4 justify-content-center"
        >
          {techCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx} 
                className="col-12 col-md-6 col-lg-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="card h-100 border-0 rounded-4 overflow-hidden"
                  style={{
                    background: "var(--bg-card)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--border-color)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -12,
                    borderColor: "var(--accent)",
                    boxShadow: "0 20px 40px var(--shadow-color)",
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                    <motion.div
                      className="mb-4 p-3 rounded-3"
                      style={{
                        background: "var(--hover-bg)",
                        border: "1px solid var(--border-color)",
                        color: "var(--accent)",
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon size={50} />
                    </motion.div>

                    <h4 className="fw-bold mb-3" style={{ color: "var(--text-primary)", fontSize: "1.25rem" }}>
                      {card.title}
                    </h4>
                    
                    <motion.span 
                      className="badge mb-3 px-3 py-2"
                      style={{
                        background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                        borderRadius: "25px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        letterSpacing: "1px",
                        color: "white",
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px var(--shadow-color)",
                      }}
                    >
                      {card.experience}
                    </motion.span>

                    <p className="mb-0" style={{ 
                      color: "var(--text-secondary)", 
                      lineHeight: "1.7",
                      fontSize: "0.95rem",
                    }}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 pt-4"
        >
          <h3 className="text-center mb-4 fw-bold gradient-text">
            Technical Expertise
          </h3>
          
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
            {expertiseIcons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="d-flex flex-column align-items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.15,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div 
                    className="expertise-icon d-flex align-items-center justify-content-center rounded-3 p-3 mb-2"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      width: "65px",
                      height: "65px",
                    }}
                    whileHover={{
                      background: "var(--hover-bg)",
                      borderColor: "var(--accent)",
                      boxShadow: "0 0 25px var(--shadow-color)",
                    }}
                  >
                    <Icon size={32} color={item.color} />
                  </div>
                  <span style={{ 
                    color: "var(--text-secondary)", 
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}>
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-5 pt-4"
        >
          <motion.a
            href="#contact"
            className="btn btn-lg px-5 py-3"
            style={{
              background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
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
            Let's Work Together 🚀
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 20px) rotate(10deg); }
        }
        
        .expertise-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @media (max-width: 768px) {
          .expertise-icon {
            width: 55px;
            height: 55px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;