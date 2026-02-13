import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaPython, 
  FaUniversity,
  FaShoppingCart,
  FaUtensils,
  FaPlane,
  FaBuilding,
  FaRobot,
  FaLaptopCode,
  FaArrowLeft,
  FaArrowRight,
  FaPause,
  FaPlay,
  FaTimes,
  FaStar,
  FaClock,
  FaTag
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiDjango, SiTensorflow } from "react-icons/si";

const Work = () => {
  const [filter, setFilter] = useState("all");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Travel With Us",
      category: "Full Stack",
      type: "web",
      img: "/projects/travel-with-us.png",
      github: "https://github.com/Usama112222/Travel-With-Us-Full-Stack-Web-Application",
      demo: "https://travelwithusfyp.netlify.app/",
      description: "Complete travel booking platform with user authentication, trip listings, and booking system.",
      fullDescription: "A comprehensive travel booking platform that allows users to search for trips, book accommodations, and manage their travel itineraries. Features include user authentication, payment integration, real-time availability, and admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe"],
      icon: <FaPlane />,
      color: "#61DBFB",
      featured: true,
      date: "2025",
      stars: 12,
    },
    {
      title: "Python Food Ordering",
      category: "Full Stack",
      type: "web",
      img: "/projects/food-ordering.png",
      github: "https://github.com/Usama112222/Python-food-ordering-Full-Sack-with-Dtatabase",
      demo: "https://python-food-ordering-full-sack-with.vercel.app/",
      description: "Full-stack food ordering system with database integration, cart functionality, and order management.",
      fullDescription: "A complete food ordering platform built with Python. Users can browse restaurants, add items to cart, place orders, and track delivery status. Includes admin panel for restaurant owners to manage menu and orders.",
      tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "jQuery"],
      icon: <FaUtensils />,
      color: "#3776AB",
      featured: true,
      date: "2025",
      stars: 8,
    },
    {
      title: "Ecommerce React",
      category: "E-Commerce",
      type: "web",
      img: "/projects/ecommerce-react.png",
      github: "https://github.com/Usama112222/Ecommerce_React",
      demo: "https://ecommerce-psi-tan-85.vercel.app/",
      description: "Modern e-commerce platform with product listings, cart, and checkout flow built in React.",
      fullDescription: "A feature-rich e-commerce application built with React. Includes product filtering, search functionality, shopping cart, wishlist, user authentication, and responsive design for all devices.",
      tech: ["React", "Context API", "React Router", "CSS Modules", "Axios"],
      icon: <FaShoppingCart />,
      color: "#F7DF1E",
      featured: true,
      date: "2024",
      stars: 15,
    },
    {
      title: "Machine Learning Project",
      category: "AI/ML",
      type: "ml",
      img: "/projects/ml-project.png",
      github: "https://github.com/Usama112222/ml-project1",
      demo: "https://ml-project-demo.streamlit.app",
      description: "Machine learning implementation with data analysis, model training, and predictions.",
      fullDescription: "A machine learning project focused on predictive analytics. Includes data preprocessing, feature engineering, model selection, hyperparameter tuning, and visualization of results using various ML algorithms.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
      icon: <FaRobot />,
      color: "#FF6F00",
      featured: true,
      date: "2024",
      stars: 10,
    },
    {
      title: "University Website",
      category: "React UI",
      type: "web",
      img: "/projects/university-website.png",
      github: "https://github.com/Usama112222/University-Website-React-UI",
      demo: "https://university-website-demo.netlify.app",
      description: "Modern, responsive university website UI with programs showcase, campus gallery, and testimonials.",
      fullDescription: "A modern university website showcasing programs, campus life, faculty, and student testimonials. Features smooth animations, responsive design, and an intuitive user interface built with React.",
      tech: ["React", "CSS3", "Framer Motion", "Responsive Design"],
      icon: <FaUniversity />,
      color: "#9C27B0",
      featured: true,
      date: "2025",
      stars: 7,
    },
    {
      title: "React Property Project",
      category: "Real Estate",
      type: "web",
      img: "/projects/property-project.png",
      github: "https://github.com/Usama112222/React-Property-Project",
      demo: "https://property-project-demo.netlify.app",
      description: "Property listing platform with search filters, property details, and interactive UI.",
      fullDescription: "A real estate platform for property listings with advanced search filters, map integration, property details page, and contact forms for inquiries. Built with modern React practices.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Leaflet"],
      icon: <FaBuilding />,
      color: "#10B981",
      featured: true,
      date: "2024",
      stars: 9,
    },
    {
      title: "Ecommerce Website",
      category: "E-Commerce",
      type: "web",
      img: "/projects/ecommerce-website.png",
      github: "https://github.com/Usama112222/Ecommerce-Website",
      demo: "https://ecommerce-full-demo.vercel.app",
      description: "Complete e-commerce solution with product management, user accounts, and payment integration.",
      fullDescription: "A full-stack e-commerce platform with complete shopping functionality. Features include product catalog, shopping cart, user authentication, order tracking, admin dashboard, and payment gateway integration.",
      tech: ["MERN Stack", "Redux", "JWT", "Stripe", "Cloudinary"],
      icon: <FaShoppingCart />,
      color: "#FF6B6B",
      featured: false,
      date: "2023",
      stars: 11,
    },
    {
      title: "Portfolio Website",
      category: "Personal",
      type: "web",
      img: "/projects/portfolio.png",
      github: "https://github.com/Usama112222/portfolio",
      demo: "https://usama-portfolio.vercel.app",
      description: "Personal portfolio website showcasing projects and skills with modern design.",
      fullDescription: "A personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, responsive design, and an elegant UI to highlight work and achievements.",
      tech: ["React", "Framer Motion", "Bootstrap", "CSS3"],
      icon: <FaLaptopCode />,
      color: "var(--accent)",
      featured: false,
      date: "2024",
      stars: 5,
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" 
      ? true 
      : filter === "featured"
      ? project.featured
      : filter === "ml"
      ? project.type === "ml"
      : filter === "E-Commerce"
      ? project.category === "E-Commerce"
      : filter === "web"
      ? project.type === "web"
      : project.category.toLowerCase().includes(filter);
    
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { value: "all", label: "All Projects", icon: "🚀" },
    { value: "featured", label: "Featured", icon: "✨" },
    { value: "web", label: "Web Apps", icon: "💻" },
    { value: "ml", label: "AI/ML", icon: "🤖" },
    { value: "E-Commerce", label: "E-Commerce", icon: "🛒" }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const cardWidth = 380 + 24;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (scrollContainerRef.current && isAutoPlaying && !hoveredCard) {
        const { current } = scrollContainerRef;
        const maxScroll = current.scrollWidth - current.clientWidth;
        
        if (current.scrollLeft >= maxScroll - 10) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: 380 + 24, behavior: "smooth" });
        }
      }
    }, 3000);
  }, [isAutoPlaying, hoveredCard]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [filter, searchQuery]);

  useEffect(() => {
    if (inView && isAutoPlaying) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [inView, isAutoPlaying, startAutoPlay, filteredProjects.length]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    }
  };

  return (
    <section
      id="work"
      ref={ref}
      className="work-section position-relative py-5"
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
          right: '2%', 
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
          left: '2%', 
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            My Portfolio
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
              maxWidth: "800px",
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: "1.8"
            }}
          >
            Explore my latest projects spanning web development, AI/ML, and full-stack applications.
            Each project represents unique challenges and innovative solutions.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="d-flex justify-content-center mb-4"
        >
          <div className="position-relative" style={{ width: "100%", maxWidth: "500px" }}>
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="🔍 Search projects by name, technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                padding: "14px 20px",
                backdropFilter: "blur(10px)",
                fontSize: "1rem",
              }}
            />
            {searchQuery && (
              <motion.button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "var(--hover-bg)",
                  border: "none",
                  color: "var(--accent)",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={14} />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="d-flex flex-wrap justify-content-center gap-3 mb-4"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setFilter(cat.value)}
              className="btn px-4 py-2 d-flex align-items-center gap-2"
              style={{
                background: filter === cat.value 
                  ? "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))" 
                  : "var(--bg-card)",
                color: filter === cat.value ? "white" : "var(--text-primary)",
                border: filter === cat.value 
                  ? "none" 
                  : "1px solid var(--border-color)",
                borderRadius: "30px",
                fontWeight: filter === cat.value ? "600" : "400",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                scale: 1.05,
                background: filter === cat.value 
                  ? "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))" 
                  : "var(--hover-bg)",
                borderColor: "var(--accent)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Controls Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <div 
              className="px-3 py-2 rounded-pill"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)"
              }}
            >
              <span className="fw-bold" style={{ color: "var(--accent)" }}>{filteredProjects.length}</span> Projects Found
            </div>
          </div>
          
          <div className="d-flex gap-2">
            <motion.button
              onClick={toggleAutoPlay}
              className="btn rounded-circle p-3"
              style={{
                background: isAutoPlaying ? "var(--hover-bg)" : "var(--bg-card)",
                border: `1px solid var(--border-color)`,
                color: "var(--accent)",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isAutoPlaying ? <FaPause /> : <FaPlay />}
            </motion.button>
            
            <motion.button
              onClick={() => scroll("left")}
              className="btn rounded-circle p-3"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--accent)",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.1, background: "var(--hover-bg)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            
            <motion.button
              onClick={() => scroll("right")}
              className="btn rounded-circle p-3"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--accent)",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.1, background: "var(--hover-bg)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Container */}
        {filteredProjects.length > 0 ? (
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="d-flex gap-4 pb-4"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "thin",
              scrollbarColor: "var(--accent) var(--bg-secondary)",
              WebkitOverflowScrolling: "touch",
              padding: "15px 5px",
              margin: "0 -5px",
            }}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="project-card-wrapper"
                style={{
                  flex: "0 0 auto",
                  width: "380px",
                  maxWidth: "90vw"
                }}
              >
                <motion.div
                  className="card h-100 border-0 rounded-4 overflow-hidden"
                  style={{
                    background: "var(--bg-card)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--border-color)",
                    height: "540px",
                  }}
                  whileHover={{
                    y: -15,
                    borderColor: "var(--accent)",
                    boxShadow: "0 25px 50px var(--shadow-color)",
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.1 }}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x400/${project.color.slice(1)}/ffffff?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: "linear-gradient(to bottom, transparent 50%, var(--bg-primary) 100%)",
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className="position-absolute top-0 start-0 p-3">
                      <span
                        className="badge px-3 py-2 d-flex align-items-center gap-1"
                        style={{
                          background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          color: "white",
                        }}
                      >
                        <FaTag size={10} />
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="position-absolute top-0 end-0 p-3">
                        <span
                          className="badge px-3 py-2 d-flex align-items-center gap-1"
                          style={{
                            background: "linear-gradient(45deg, #FFD700, #FFA500)",
                            color: "#000",
                            borderRadius: "20px",
                          }}
                        >
                          <FaStar /> Featured
                        </span>
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="position-absolute bottom-0 start-0 p-3">
                      <span
                        className="badge d-flex align-items-center gap-1"
                        style={{
                          background: "var(--bg-card)",
                          color: "var(--text-primary)",
                          borderRadius: "15px",
                          fontSize: "0.7rem",
                          padding: "5px 12px",
                          backdropFilter: "blur(5px)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <FaClock size={10} />
                        {project.date}
                      </span>
                    </div>

                    {/* Stars Badge */}
                    <div className="position-absolute bottom-0 end-0 p-3">
                      <span
                        className="badge d-flex align-items-center gap-1"
                        style={{
                          background: "var(--bg-card)",
                          color: "#FFD700",
                          borderRadius: "15px",
                          fontSize: "0.7rem",
                          padding: "5px 12px",
                          backdropFilter: "blur(5px)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <FaStar />
                        {project.stars}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div
                        className="rounded-2 p-2"
                        style={{
                          background: "var(--hover-bg)",
                          border: "1px solid var(--border-color)",
                          color: project.color
                        }}
                      >
                        {project.icon}
                      </div>
                      <h5 className="fw-bold mb-0" style={{ color: "var(--text-primary)", fontSize: "1.25rem" }}>
                        {project.title}
                      </h5>
                    </div>

                    <p className="small mb-3" style={{ color: "var(--text-secondary)", lineHeight: "1.6", flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="badge"
                          style={{
                            background: "var(--bg-card)",
                            color: "var(--text-secondary)",
                            padding: "6px 12px",
                            borderRadius: "15px",
                            fontSize: "0.7rem",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        style={{
                          background: "var(--bg-card)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-primary)",
                          borderRadius: "25px",
                          padding: "10px 16px",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        whileHover={{
                          background: "var(--hover-bg)",
                          borderColor: "var(--accent)",
                          scale: 1.02,
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} /> Code
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        style={{
                          background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                          border: "none",
                          color: "white",
                          borderRadius: "25px",
                          padding: "10px 16px",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 20px var(--shadow-color)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} /> Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5"
          >
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "50px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <h3 style={{ color: "var(--text-primary)" }}>🔍 No Projects Found</h3>
              <p style={{ color: "var(--text-secondary)" }}>No projects match your current filters.</p>
              <motion.button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
                className="btn px-5 py-3 mt-3"
                style={{
                  background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(15px)",
              zIndex: 99999,
              padding: "20px",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="card border-0 rounded-4 overflow-hidden"
              style={{
                maxWidth: "900px",
                width: "100%",
                maxHeight: "90vh",
                overflow: "auto",
                background: "var(--bg-primary)",
                border: "2px solid var(--border-color)",
                boxShadow: "0 0 60px var(--shadow-color)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="position-relative">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x400/${selectedProject.color.slice(1)}/ffffff?text=${encodeURIComponent(selectedProject.title)}`;
                  }}
                />
                
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, var(--bg-primary) 100%)",
                  }}
                />
                
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(5px)",
                    cursor: "pointer"
                  }}
                  whileHover={{ scale: 1.1, background: "var(--accent)", color: "white" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={20} />
                </motion.button>

                <div className="position-absolute bottom-0 start-0 p-4">
                  <span
                    className="badge px-4 py-2"
                    style={{
                      background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                      borderRadius: "30px",
                      fontSize: "0.9rem",
                      color: "white",
                    }}
                  >
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="rounded-4 p-3"
                    style={{
                      background: "var(--hover-bg)",
                      border: "1px solid var(--border-color)",
                      color: selectedProject.color,
                    }}
                  >
                    {React.cloneElement(selectedProject.icon, { size: 40 })}
                  </div>
                  <div>
                    <h2 className="fw-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      {selectedProject.title}
                    </h2>
                    <div className="d-flex gap-3">
                      <span className="d-flex align-items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                        <FaClock color="var(--accent)" /> {selectedProject.date}
                      </span>
                      <span className="d-flex align-items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                        <FaStar color="#FFD700" /> {selectedProject.stars} Stars
                      </span>
                    </div>
                  </div>
                </div>
                
                <h5 style={{ color: "var(--accent)" }}>Overview</h5>
                <p className="mb-4" style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.1rem" }}>
                  {selectedProject.fullDescription}
                </p>
                
                <h5 style={{ color: "var(--accent)" }}>Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="badge px-4 py-2"
                      style={{
                        background: "var(--bg-card)",
                        color: "var(--text-primary)",
                        borderRadius: "25px",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="d-flex gap-3 mt-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2 py-3"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontSize: "1rem",
                      cursor: "pointer"
                    }}
                    whileHover={{
                      background: "var(--hover-bg)",
                      borderColor: "var(--accent)",
                      scale: 1.02,
                    }}
                  >
                    <FaGithub size={20} /> View Code
                  </motion.a>
                  
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2 py-3"
                    style={{
                      background: "linear-gradient(45deg, var(--gradient-1), var(--gradient-2))",
                      border: "none",
                      color: "white",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontSize: "1rem",
                      cursor: "pointer"
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px var(--shadow-color)",
                    }}
                  >
                    <FaExternalLinkAlt size={18} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 20px) rotate(10deg); }
        }

        .work-section {
          scroll-margin-top: 70px;
        }

        .d-flex[style*="overflow-x: auto"]::-webkit-scrollbar {
          height: 8px;
        }

        .d-flex[style*="overflow-x: auto"]::-webkit-scrollbar-track {
          background: var(--bg-secondary);
          border-radius: 10px;
        }

        .d-flex[style*="overflow-x: auto"]::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, var(--gradient-1), var(--gradient-2));
          border-radius: 10px;
        }

        .d-flex[style*="overflow-x: auto"]::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, var(--gradient-2), var(--gradient-1));
        }

        .form-control:focus {
          box-shadow: 0 0 25px var(--shadow-color);
          border-color: var(--accent) !important;
          outline: none;
          background: var(--hover-bg) !important;
        }

        .form-control::placeholder {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .project-card-wrapper {
            width: 320px !important;
          }
        }

        @media (max-width: 576px) {
          .project-card-wrapper {
            width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Work;