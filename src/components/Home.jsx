import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaCode,
  FaChartBar
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiOpencv, 
  SiKeras,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiDjango
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const techIcons = [
    { icon: <FaReact size={45} color="#61DBFB" />, top: "10%", left: "5%", rotate: [0, 15, -15, 0] },
    { icon: <FaNodeJs size={45} color="#68A063" />, top: "15%", left: "88%", rotate: [0, -10, 10, 0] },
    { icon: <FaJsSquare size={45} color="#F7DF1E" />, top: "70%", left: "3%", rotate: [0, 20, -20, 0] },
    { icon: <FaHtml5 size={45} color="#E34F26" />, top: "82%", left: "85%", rotate: [0, 15, -15, 0] },
    { icon: <FaCss3Alt size={45} color="#264DE4" />, top: "50%", left: "92%", rotate: [0, -20, 20, 0] },
    { icon: <FaPython size={45} color="#3776AB" />, top: "25%", left: "15%", rotate: [0, 10, -10, 0] },
    { icon: <SiTensorflow size={45} color="#FF6F00" />, top: "40%", left: "78%", rotate: [0, -15, 15, 0] },
    { icon: <SiPytorch size={45} color="#EE4C2C" />, top: "60%", left: "20%", rotate: [0, 20, -20, 0] },
    { icon: <SiScikitlearn size={45} color="#F7931E" />, top: "75%", left: "70%", rotate: [0, -25, 25, 0] },
    { icon: <FaBrain size={45} color="#9C27B0" />, top: "20%", left: "70%", rotate: [0, 15, -15, 0] },
    { icon: <FaRobot size={45} color="#00BCD4" />, top: "85%", left: "40%", rotate: [0, -20, 20, 0] },
    { icon: <SiPandas size={45} color="#130654" />, top: "45%", left: "10%", rotate: [0, 25, -25, 0] },
    { icon: <SiNumpy size={45} color="#4C72B0" />, top: "30%", left: "82%", rotate: [0, -15, 15, 0] },
    { icon: <SiOpencv size={45} color="#5C3EE8" />, top: "65%", left: "50%", rotate: [0, 10, -10, 0] },
    { icon: <FaDatabase size={45} color="#00758F" />, top: "5%", left: "40%", rotate: [0, -20, 20, 0] },
  ];

  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center justify-content-center"
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "150px",
        background: "var(--bg-primary)",
      }}
    >
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/img/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          filter: "brightness(0.4) blur(1px)",
        }}
        animate={{ 
          x: ["0%", "-3%", "0%", "2%", "0%"], 
          y: ["0%", "1%", "-1%", "1.5%", "0%"], 
          scale: [1, 1.03, 1.02, 1.04, 1] 
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1
        }}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 2 }}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { 
              value: ["#22d3ee", "#9333ea", "#3b82f6", "#10b981", "#f59e0b"] 
            },
            links: { 
              enable: true, 
              color: "random", 
              distance: 150, 
              opacity: 0.3, 
              width: 1 
            },
            move: { 
              enable: true, 
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out"
            },
            number: { 
              value: 80,
              density: { enable: true, area: 800 }
            },
            opacity: { 
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.2 }
            },
            shape: { 
              type: ["circle", "triangle", "polygon"],
              options: {
                polygon: { sides: 6 }
              }
            },
            size: { 
              value: { min: 2, max: 6 },
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.5 }
            },
          },
          detectRetina: true,
        }}
      />

      {techIcons.map((t, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: t.top,
            left: t.left,
            zIndex: 3,
          }}
          animate={{ 
            rotate: t.rotate,
            y: [0, -15, 0, 15, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            opacity: [0.7, 1, 0.8, 1, 0.7]
          }}
          transition={{ 
            duration: 5 + idx, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: idx * 0.2
          }}
          whileHover={{ 
            scale: 1.5, 
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        >
          <div style={{ 
            filter: `drop-shadow(0 0 10px var(--accent))`,
            transition: "all 0.3s ease"
          }}>
            {t.icon}
          </div>
        </motion.div>
      ))}

      <div className="position-relative text-center px-3" style={{ zIndex: 4, maxWidth: "1200px" }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.img
            src="/img/logo.png"
            alt="Logo"
            style={{
              height: "280px",
              width: "280px",
              objectFit: "contain",
              borderRadius: "50%",
              border: "4px solid var(--border-color)",
              boxShadow: "0 0 30px var(--accent), 0 0 60px var(--accent), 0 0 90px var(--accent)",
            }}
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 5, -5, 0],
              boxShadow: [
                "0 0 30px var(--accent), 0 0 60px var(--accent), 0 0 90px var(--accent)",
                "0 0 40px var(--accent-secondary), 0 0 80px var(--accent-secondary), 0 0 120px var(--accent-secondary)",
                "0 0 30px var(--accent), 0 0 60px var(--accent), 0 0 90px var(--accent)"
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 50px var(--accent), 0 0 100px var(--accent), 0 0 150px var(--accent)",
              transition: { duration: 0.8 }
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4"
        >
          <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Hi, I'm <span className="gradient-text">Usama</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-3"
        >
          <TypeAnimation
            sequence={[
              "🚀 Full-Stack Developer",
              2000,
              "🐍 Python Developer",
              2000,
              "🤖 AI & ML Engineer",
              2000,
              "🧠 Deep Learning Specialist",
              2000,
              "📊 Data Scientist",
              2000,
              "⚛️ React Enthusiast",
              2000,
              "🔧 Node.js Developer",
              2000,
            ]}
            speed={50}
            wrapper="h2"
            repeat={Infinity}
            className="display-4 fw-bold"
            style={{
              color: "var(--accent)",
              textShadow: "0 0 10px var(--accent), 0 0 20px var(--accent)",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="lead mt-4"
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "var(--text-secondary)",
            lineHeight: "1.8"
          }}
        >
          Building scalable web applications and intelligent AI solutions. 
          Specialized in MERN stack, Python, Machine Learning, and Deep Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="d-flex flex-wrap gap-2 mt-4 justify-content-center"
        >
          {["React", "Node.js", "Python", "TensorFlow", "PyTorch", "MongoDB", "AWS", "Docker"].map((skill, idx) => (
            <motion.span
              key={idx}
              className="badge px-3 py-2"
              style={{
                background: "var(--bg-card)",
                color: "var(--accent)",
                border: "1px solid var(--border-color)",
                borderRadius: "25px",
                fontSize: "0.9rem",
                backdropFilter: "blur(5px)",
              }}
              whileHover={{
                scale: 1.1,
                background: "var(--card-hover-bg)",
                borderColor: "var(--accent)",
                boxShadow: "0 0 15px var(--accent)",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="d-flex flex-wrap gap-3 mt-5 justify-content-center"
        >
          <motion.a
            className="btn btn-outline px-5 py-3"
            href="/pdf/usman-cv.pdf"
            download
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 20px var(--accent)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontWeight: "600",
              borderRadius: "30px",
              borderWidth: "2px",
              fontSize: "1.1rem",
            }}
          >
            📄 Download CV
          </motion.a>
          
          <motion.a
            className="btn btn-outline px-5 py-3"
            href="https://github.com/Usama112222"
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 20px var(--accent)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontWeight: "600",
              borderRadius: "30px",
              borderWidth: "2px",
              fontSize: "1.1rem",
            }}
          >
            💻 GitHub
          </motion.a>
          
          <motion.a
            className="btn btn-primary px-5 py-3"
            href="#contact"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 30px var(--accent)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontWeight: "600",
              borderRadius: "30px",
              fontSize: "1.1rem",
            }}
          >
            📧 Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-5"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-decoration-none">
            <div style={{ color: "var(--accent)", fontSize: "2rem" }}>
              ↓
            </div>
            <small style={{ color: "var(--accent)", opacity: 0.8 }}>Scroll Down</small>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;