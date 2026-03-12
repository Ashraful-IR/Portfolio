/**
 * Portfolio Website - JavaScript
 * Lightweight, accessible interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // ========== DOM Elements ==========
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // ========== Smooth Scrolling ==========
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement && navbar) {
      e.preventDefault();

      if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }

      const navHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      updateActiveLink(targetId);
    }
  });

  // ========== Active Link Highlighting ==========
  function updateActiveLink(targetId) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === targetId) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    const sections = document.querySelectorAll("section[id]");
    const navHeight = navbar.offsetHeight;
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = "#" + section.getAttribute("id");
      }
    });

    if (currentSection) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentSection) {
          link.classList.add("active");
        }
      });
    }
  });

  // ========== Mobile Menu Toggle ==========
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      console.log("Hamburger toggled");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  } else {
    console.log("Hamburger or navMenu not found in DOM");
  }

  // ========== Navbar Shadow ==========
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.style.boxShadow = window.scrollY > 10 ? "var(--shadow-md)" : "none";
  });

  // ========== Prefetch ==========
  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest('a[href$=".html"]');
    if (link && !link.href.startsWith("http")) {
      const l = document.createElement("link");
      l.rel = "prefetch";
      l.href = link.href;
      document.head.appendChild(l);
    }
  });

  // ========== Intersection Observer ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".project-card, .skill-category, .stat-item, .contact-link",
      )
      .forEach((el) => {
        el.style.opacity = "0.7";
        el.style.transform = "translateY(10px)";
        el.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
        observer.observe(el);
      });
  }

  console.log("Portfolio JS loaded successfully");
});
document.querySelectorAll(".cert-slider").forEach((slider) => {
  const track = slider.querySelector(".cert-track");
  const slides = slider.querySelectorAll(".cert-slide");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let index = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener("click", () => {
    index = index > 0 ? index - 1 : slides.length - 1;
    updateSlider();
  });

  next.addEventListener("click", () => {
    index = index < slides.length - 1 ? index + 1 : 0;
    updateSlider();
  });

  // auto slide
  setInterval(() => {
    index = index < slides.length - 1 ? index + 1 : 0;
    updateSlider();
  }, 3000);
});

const techs = [
  {
    name: "HTML",
    icon: "file-code",
    color: "hsl(14,85%,55%)",
    bg: "hsl(14,85%,95%)",
  },
  {
    name: "CSS",
    icon: "palette",
    color: "hsl(210,80%,55%)",
    bg: "hsl(210,80%,95%)",
  },
  {
    name: "Tailwind",
    icon: "wind",
    color: "hsl(189,85%,48%)",
    bg: "hsl(189,85%,93%)",
  },
  {
    name: "JavaScript",
    icon: "braces",
    color: "hsl(50,90%,45%)",
    bg: "hsl(50,90%,92%)",
  },
  {
    name: "React",
    icon: "code",
    color: "hsl(193,95%,45%)",
    bg: "hsl(193,95%,93%)",
  },
  {
    name: "Node.js",
    icon: "terminal",
    color: "hsl(120,50%,40%)",
    bg: "hsl(120,50%,93%)",
  },
  {
    name: "C++",
    icon: "braces",
    color: "hsl(240,55%,55%)",
    bg: "hsl(240,55%,95%)",
  },
  {
    name: "Git",
    icon: "git-branch",
    color: "hsl(10,75%,50%)",
    bg: "hsl(10,75%,95%)",
  },
  {
    name: "SQL",
    icon: "database",
    color: "hsl(30,80%,52%)",
    bg: "hsl(30,80%,94%)",
  },
];

const container = document.getElementById("orbitContainer");

let angle = 0;
let mouse = { x: 0, y: 0 };
let hoveredIndex = null;

const nodes = [];

techs.forEach((tech, i) => {
  const wrapper = document.createElement("div");
  wrapper.className = "absolute flex flex-col items-center cursor-pointer";
  wrapper.style.transition = "transform .2s";

  const card = document.createElement("div");
  card.className =
    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl border shadow-sm";
  card.style.backgroundColor = tech.bg;
  card.style.borderColor = tech.color;

  const icon = document.createElement("i");
  icon.setAttribute("data-lucide", tech.icon);
  icon.style.color = tech.color;

  const label = document.createElement("span");
  label.textContent = tech.name;
  label.className = "text-xs font-medium";

  card.appendChild(icon);
  card.appendChild(label);
  wrapper.appendChild(card);
  container.appendChild(wrapper);

  wrapper.addEventListener("mouseenter", () => (hoveredIndex = i));
  wrapper.addEventListener("mouseleave", () => (hoveredIndex = null));

  nodes.push(wrapper);
});

lucide.createIcons();

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  mouse.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
  mouse.y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
});

container.addEventListener("mouseleave", () => {
  mouse = { x: 0, y: 0 };
});

function animate() {
  angle += 0.003;

  nodes.forEach((node, i) => {
    const total = nodes.length;

    const baseAngle = (i / total) * Math.PI * 2 + angle;

    const orbitRadius = i % 2 === 0 ? 38 : 28;

    const baseX = Math.cos(baseAngle) * orbitRadius;
    const baseY = Math.sin(baseAngle) * orbitRadius;

    const mouseInfluence = 6;

    const finalX = 50 + baseX + mouse.x * mouseInfluence;
    const finalY = 50 + baseY + mouse.y * mouseInfluence;

    const scale = hoveredIndex === i ? 1.3 : 1;

    node.style.left = finalX + "%";
    node.style.top = finalY + "%";
    node.style.transform = `translate(-50%,-50%) scale(${scale})`;
  });

  requestAnimationFrame(animate);
}

animate();

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration.",
    longDescription:
      "Built a complete e-commerce solution with product catalog, shopping cart, secure checkout flow, and Stripe payment integration. Features include user authentication, order history, and an admin dashboard for managing products and orders.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates.",
    longDescription:
      "Developed a real-time task management application that allows teams to create, assign, and track tasks.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["TypeScript", "React", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Weather Dashboard",
    description:
      "Real-time weather data visualization with location-based forecasts.",
    longDescription:
      "Created a weather dashboard displaying current conditions and 7-day forecasts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Portfolio Generator",
    description:
      "A tool that generates beautiful portfolio websites from a JSON config.",
    longDescription:
      "Built a portfolio generator that produces a fully responsive portfolio website.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const grid = document.getElementById("projectsGrid");
const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const liveLink = document.getElementById("liveLink");
const githubLink = document.getElementById("githubLink");

projects.forEach((project) => {
  const card = document.createElement("div");

  card.className =
    "overflow-hidden text-left group cursor-pointer rounded-xl bg-white border transition-shadow duration-200";

  card.innerHTML = `

<div class="aspect-video overflow-hidden">
<img src="${project.image}"
class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
</div>

<div class="p-6">

<h3 class="font-bold text-lg mb-2">${project.title}</h3>

<p class="text-gray-500 text-sm mb-4">
${project.description}
</p>

<div class="flex flex-wrap gap-2">
${project.technologies
  .map(
    (t) => `
<span class="text-xs font-medium bg-gray-100 px-2.5 py-1 rounded-md">
${t}
</span>
`,
  )
  .join("")}
</div>

</div>
`;

  /* tilt effect */

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;

    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  });

  /* open modal */

  card.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.textContent = project.longDescription;

    liveLink.href = project.liveUrl;
    githubLink.href = project.githubUrl;

    modalTech.innerHTML = project.technologies
      .map(
        (t) => `
<span class="text-xs font-medium bg-blue-100 text-blue-600 px-2.5 py-1 rounded-md">
${t}
</span>
`,
      )
      .join("");
  });

  grid.appendChild(card);
});

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
};

modal.onclick = () => {
  modal.classList.add("hidden");
};

// Education data
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    year: "2020 – 2024",
    achievements: "Dean's List, GPA: 3.8/4.0",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School",
    year: "2018 – 2020",
    achievements: "Top 5% of class",
  },
];

const eduGrid = document.getElementById("eduGrid");
const pingBall = document.getElementById("pingBall");

let activeIndex = 0;

// Render education cards
function renderCards() {
  eduGrid.innerHTML = "";
  education.forEach((edu, i) => {
    const card = document.createElement("div");
    card.className =
      "p-6 flex gap-4 rounded-xl border transition-all duration-500";

    // Dynamic styles based on active index
    card.style.backgroundColor =
      activeIndex === i ? "hsl(0,0%,100%)" : "hsl(0,0%,95%)";
    card.style.borderColor =
      activeIndex === i ? "hsl(210,100%,50%,0.4)" : "#d1d5db";
    card.style.boxShadow =
      activeIndex === i
        ? "0 8px 30px -8px rgba(59,130,246,0.15)"
        : "0 0 0 1px rgba(209,213,219,0.8), 0 1px 2px 0 rgba(0,0,0,0.03)";
    card.style.transform = activeIndex === i ? "scale(1.02)" : "scale(1)";

    // Graduation cap SVG
    const iconWrapper = document.createElement("div");
    iconWrapper.className =
      "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-500";
    iconWrapper.style.backgroundColor =
      activeIndex === i ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)";
    iconWrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:${activeIndex === i ? "rotate(-12deg) scale(1.1)" : "rotate(0)"}" class="text-blue-500 transition-transform duration-500">
        <path d="M2 12l10 6 10-6-10-6-10 6z"/>
        <path d="M12 18v4"/>
        <path d="M12 18l3-3"/>
        <path d="M12 18l-3-3"/>
      </svg>
    `;

    // Content
    const content = document.createElement("div");
    content.innerHTML = `
      <h3 class="font-bold text-gray-800">${edu.degree}</h3>
      <p class="text-gray-500 text-sm">${edu.institution}</p>
      <p class="text-blue-500 text-sm font-medium mt-1">${edu.year}</p>
      ${edu.achievements ? `<p class="text-gray-500 text-sm mt-2">${edu.achievements}</p>` : ""}
    `;

    card.appendChild(iconWrapper);
    card.appendChild(content);

    eduGrid.appendChild(card);
  });

  // Move ping ball
  pingBall.style.left = activeIndex === 0 ? "20%" : "80%";
}

renderCards();

// Ping-pong effect
setInterval(() => {
  activeIndex = activeIndex === 0 ? 1 : 0;
  renderCards();
}, 2000);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const desktopNav = document.getElementById("desktopNav");
const mobileNav = document.getElementById("mobileNav");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
let activeSection = "home";

// Render nav links
function renderNavLinks() {
  desktopNav.innerHTML = "";
  mobileNav.innerHTML = "";
  navLinks.forEach((link) => {
    const aDesktop = document.createElement("a");
    aDesktop.href = link.href;
    aDesktop.textContent = link.label;
    aDesktop.className = "nav-link";
    aDesktop.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection(link.href);
      mobileMenu.classList.add("hidden");
      toggleHamburger(false);
    });
    desktopNav.appendChild(aDesktop);

    const aMobile = aDesktop.cloneNode(true);
    mobileNav.appendChild(aMobile);
  });
}

renderNavLinks();

// Hamburger toggle
let isOpen = false;
function toggleHamburger(state) {
  isOpen = state !== undefined ? state : !isOpen;
  menuIcon.classList.toggle("hidden", isOpen);
  closeIcon.classList.toggle("hidden", !isOpen);
  mobileMenu.classList.toggle("hidden", !isOpen);
}

hamburgerBtn.addEventListener("click", () => toggleHamburger());

// Smooth scroll
function scrollToSection(href) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

// Scroll spy
window.addEventListener("scroll", () => {
  navLinks.forEach((link) => {
    const section = document.querySelector(link.href);
    if (section) {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) activeSection = link.href.slice(1);
    }
  });
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.remove("nav-link-active");
    if (a.getAttribute("href") === "#" + activeSection) {
      a.classList.add("nav-link-active");
    }
  });
});

const certificates = [
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    image:
      "https://images.unsplash.com/photo-1496065187959-7f07c4e546b7?w=600&h=400&fit=crop",
  },
  {
    title: "React Professional Certificate",
    issuer: "Meta",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Stanford Online",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
  },
];

const carouselInner = document.getElementById("carouselInner");
const dotsContainer = document.getElementById("dotsContainer");
let current = 0;

// Render slides
certificates.forEach((cert) => {
  const slide = document.createElement("div");
  slide.className = "min-w-full";
  slide.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}" class="w-full aspect-video object-cover">
      <div class="p-6 text-center">
        <h3 class="font-bold text-gray-800 text-lg">${cert.title}</h3>
        <p class="text-gray-500 text-sm mt-1">${cert.issuer}</p>
      </div>
    `;
  carouselInner.appendChild(slide);
});

// Render dots
certificates.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = `dot w-2 h-2 rounded-full ${i === 0 ? "bg-blue-500 w-6" : "bg-gray-300"}`;
  dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
  dot.addEventListener("click", () => {
    current = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${current * 100}%)`;
  // Update dots
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.className = `dot w-2 h-2 rounded-full ${i === current ? "bg-blue-500 w-6" : "bg-gray-300"}`;
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  current = current === 0 ? certificates.length - 1 : current - 1;
  updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = current === certificates.length - 1 ? 0 : current + 1;
  updateCarousel();
});

const fadeUpElements = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

fadeUpElements.forEach((el) => observer.observe(el));

// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
