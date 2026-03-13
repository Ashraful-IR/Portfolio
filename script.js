/**
 * Portfolio Website - JavaScript
 * Lightweight, accessible interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // DOM ELEMENTS
  // ==========================
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  const container = document.getElementById("orbitContainer");

  const grid = document.getElementById("projectsGrid");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalTech = document.getElementById("modalTech");
  const liveLink = document.getElementById("liveLink");
  const githubLink = document.getElementById("githubLink");

  const eduGrid = document.getElementById("eduGrid");
  const pingBall = document.getElementById("pingBall");

  const desktopNav = document.getElementById("desktopNav");
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  const carouselInner = document.getElementById("carouselInner");
  const dotsContainer = document.getElementById("dotsContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const fadeUpElements = document.querySelectorAll(".fade-up");

  // ==========================
  // PROJECTS SECTION
  // ==========================
  const projects = [
    {
      title: "Git Hub Issue Tracker",
      description:
        "This is a github issue tracker website. Basically show all the issues with it’s according status like “Open” or “Closed”. And also indicate the priority level.",
      longDescription:
        "A GitHub Issue Tracker web application that allows users to view and manage issues from GitHub repositories. The application fetches issue data using the GitHub API and displays it in an organized manner, categorizing issues by their status (e.g., Open, Closed) and priority level. Users can easily track the progress of their projects and stay updated on any changes or updates to their issues.",
      image: "./assets/project-pic/GH-Issue.png",
      technologies: ["Html", "Tailwind CSS", "JavaScript", "Open API"],
      liveUrl: "https://ashraful-ir.github.io/GitHub-Issue-Traker/",
      githubUrl: "https://github.com/Ashraful-IR/GitHub-Issue-Traker",
    },
    {
      title: "English Janala",
      description:
        "A responsive interactive English learning platform featuring dynamic lesson buttons, searchable word cards with pronunciation, example details, and the ability to save favorite words for seamless learning across devices.",
      longDescription:
        "An interactive English learning platform designed to enhance vocabulary acquisition through engaging lessons and personalized study tools. Key features include dynamic lesson buttons that allow users to explore various topics, a searchable word card system with integrated pronunciation and example sentences, and a favorites feature that enables users to save and review their preferred words across sessions. The platform is built with a responsive design to ensure an optimal learning experience on both desktop and mobile devices.",
      image: "./assets/project-pic/Englishjanala.png",
      technologies: ["Html", "Tailwind CSS", "JavaScript", "Open API"],
      liveUrl: "https://ashraful-ir.github.io/EnglishJanala/",
      githubUrl: "https://github.com/Ashraful-IR/EnglishJanala",
    },
    {
      title: "Job Application Tracker",
      description:
        "A responsive job application dashboard that lets users manage and track applications with interactive job cards, real-time status updates, and a clean mobile-first UI.",
      longDescription:
        "A responsive job application dashboard designed to help users efficiently manage and track their job applications. The platform features interactive job cards that display essential information such as company name, position, application date, and current status. Users can easily update the status of their applications in real-time, allowing for seamless organization and follow-up. The dashboard is built with a mobile-first approach, ensuring a clean and intuitive user interface across all devices.",
      image: "./assets/project-pic/JAT.png",
      technologies: ["JavaScript", "CSS", "Html"],
      liveUrl: "https://ashraful-ir.github.io/Job-Application-Tracker/",
      githubUrl: "https://github.com/Ashraful-IR/Job-Application-Tracker",
    },
  ];

  function renderProjects() {
    grid.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className =
        "overflow-hidden text-left group cursor-pointer border-cyan-100 shadow-lg rounded-xl bg-white border transition-shadow duration-200 project-card";

      card.innerHTML = `
      <div class="aspect-video overflow-hidden">
        <img src="${project.image}" class="w-full h-full object-fit transition-transform duration-300 group-hover:scale-105">
      </div>
      <div class="p-6 bg-cyan-50">
        <h3 class="font-bold text-[30px] mb-2">${project.title}</h3>
        <p class="text-gray-500 text-sm mb-4 text-justify">${project.description}</p>
        <div class="flex flex-wrap gap-2 ">
          ${project.technologies.map((t) => `<span class="text-xs font-medium bg-yellow-100 border border-yellow-300 px-2.5 py-1 rounded-md">${t}</span>`).join("")}
        </div>
      </div>
    `;

      // Tilt effect
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
        card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      });

      // Modal open
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
            (t) =>
              `<span class="text-xs font-medium bg-blue-100 text-blue-600 px-2.5 py-1 rounded-md">${t}</span>`,
          )
          .join("");
      });

      grid.appendChild(card);
    });
  }
  renderProjects();

  // Close modal
  document.getElementById("closeModal").onclick = () =>
    modal.classList.add("hidden");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

  // ==========================
  // HELPERS
  // ==========================
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToSection(href) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  // ==========================
  // SMOOTH SCROLLING & ACTIVE LINK
  // ==========================
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
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      updateActiveLink(targetId);
    }
  });

  function updateActiveLink(targetId) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === targetId) link.classList.add("active");
    });
  }

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    // Scroll spy
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
        if (link.getAttribute("href") === currentSection)
          link.classList.add("active");
      });
    }

    // Navbar shadow
    navbar.style.boxShadow = window.scrollY > 10 ? "var(--shadow-md)" : "none";
  });

  // ==========================
  // MOBILE MENU TOGGLE
  // ==========================
  let isOpen = false;
  function toggleHamburger(state) {
    isOpen = state !== undefined ? state : !isOpen;
    menuIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
    mobileMenu.classList.toggle("hidden", !isOpen);
  }

  if (hamburgerBtn)
    hamburgerBtn.addEventListener("click", () => toggleHamburger());

  // ==========================
  // INTERSECTION OBSERVER ANIMATIONS
  // ==========================
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

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

  // ==========================
  // TECH STACK ORBIT
  // ==========================
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

  let angle = 0,
    mouse = { x: 0, y: 0 },
    hoveredIndex = null;
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

  container.addEventListener("mouseleave", () => (mouse = { x: 0, y: 0 }));

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

  // ...[Keep your existing project cards code here exactly as before]

  // ==========================
  // EDUCATION CARDS
  // ==========================
  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      year: "2022 – 2026",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Addhyapak Abdul Majid College",
      year: "2018 – 2020",
    },
  ];

  let activeIndex = 0;
  function renderCards() {
    eduGrid.innerHTML = "";
    education.forEach((edu, i) => {
      const card = document.createElement("div");
      card.className =
        "p-6 flex gap-4 rounded-xl border transition-all duration-500";
      card.style.backgroundColor =
        activeIndex === i ? "hsl(0,0%,100%)" : "hsl(0,0%,95%)";
      card.style.borderColor =
        activeIndex === i ? "hsl(210,100%,50%,0.4)" : "#d1d5db";
      card.style.boxShadow =
        activeIndex === i
          ? "0 8px 30px -8px rgba(59,130,246,0.15)"
          : "0 0 0 1px rgba(209,213,219,0.8), 0 1px 2px 0 rgba(0,0,0,0.03)";
      card.style.transform = activeIndex === i ? "scale(1.02)" : "scale(1)";

      const iconWrapper = document.createElement("div");
      iconWrapper.className =
        "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-500";
      iconWrapper.style.backgroundColor =
        activeIndex === i ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)";
      iconWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:${activeIndex === i ? "rotate(-12deg) scale(1.1)" : "rotate(0)"}" class="text-blue-500 transition-transform duration-500"><path d="M2 12l10 6 10-6-10-6-10 6z"/><path d="M12 18v4"/><path d="M12 18l3-3"/><path d="M12 18l-3-3"/></svg>`;

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

    // pingBall.style.left = activeIndex === 0 ? "40%" : "90%";
  }
  renderCards();
  // setInterval(() => {
  //   activeIndex = activeIndex === 0 ? 1 : 0;
  //   renderCards();
  // }, 2000);

  // ==========================
  // NAV LINKS RENDERING
  // ==========================
  const navLinksData = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  desktopNav.innerHTML = "";
  mobileNav.innerHTML = "";
  navLinksData.forEach((link) => {
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

  // ==========================
  // FADE-UP ANIMATION
  // ==========================
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  fadeUpElements.forEach((el) => fadeObserver.observe(el));

  // ==========================
  // DYNAMIC YEAR
  // ==========================
  document.getElementById("year").textContent = new Date().getFullYear();

  console.log("Portfolio JS loaded successfully");
});


