  /*===================== typed js ===================*/ 
  const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Web Designer', 'Youtuber', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });

  /*===================== scroll reveal ===================*/ 
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form', { origin: 'buttom' });
  ScrollReveal().reveal('.home-contact h1, .about-img , .services-list', { origin: 'left' });
  ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

  
  
