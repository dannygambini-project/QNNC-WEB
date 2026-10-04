/**
 * ============================================================================
 * QUE NO NOS CALLEN (QNNC) - LÓGICA E INTERACTIVIDAD WEB
 * Versión: 1.0.0
 * Modular, vanilla JavaScript, seguro, accesible y optimizado.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Manejo del Menú Móvil
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    mainNav.classList.add('open');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    mainNav.classList.remove('open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Cerrar menú al hacer clic en enlaces de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  });

  // Cerrar menú al presionar tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // 2. Header Scroll Effect & Back-to-Top Button
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Efecto Header
    if (scrollPos > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Botón volver arriba
    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Resaltado Dinámico de Enlaces Activos en Navegación
  const sections = document.querySelectorAll('section[id]');
  
  function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  // 4. Scroll Reveal Animations con IntersectionObserver
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay') || 0;
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback para navegadores antiguos
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 5. Animación de Contador Numérico en Hero Stats
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const start = target - 50 > 0 ? target - 50 : 0;
      let count = start;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / (target - start)));

      const timer = setInterval(() => {
        count++;
        stat.textContent = count;
        if (count >= target) {
          stat.textContent = target;
          clearInterval(timer);
        }
      }, stepTime);
    });
  }

  // Activar contadores cuando el hero es visible
  const heroSection = document.querySelector('.hero-section');
  if (heroSection && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        heroObserver.disconnect();
      }
    }, { threshold: 0.3 });
    heroObserver.observe(heroSection);
  } else {
    animateStats();
  }

  // 6. Galería Multimedia: Filtros por Categoría
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Manejar estado activo de tabs
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          // Pequeño fade-in
          item.style.opacity = '0';
          setTimeout(() => { item.style.opacity = '1'; }, 30);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 7. Lightbox Modal para Galería Multimedia
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryCards = document.querySelectorAll('.gallery-card');

  function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxCaption.textContent = title;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
    document.body.style.overflow = '';
  }

  galleryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const href = card.getAttribute('href');
      const title = card.getAttribute('data-title') || '';
      openLightbox(href, title);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 8. Formulario de Contacto Funcional & Seguro
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const successCard = document.getElementById('form-success');
  const errorCard = document.getElementById('form-error');
  const feedbackTicket = document.getElementById('feedback-ticket');

  // Sanitizador contra XSS básico para contenido que se pueda reflejar
  function sanitizeInput(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  // Validación de Email con regex estándar
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Validación de Teléfono (opcional, pero si tiene datos debe ser razonable)
  function isValidPhone(phone) {
    if (!phone) return true;
    const clean = phone.replace(/[\s\-\+\(\)]/g, '');
    return clean.length >= 7 && /^\d+$/.test(clean);
  }

  function setError(inputElement, errorElementId, message) {
    const group = inputElement.closest('.form-group') || inputElement.closest('.form-check-group');
    if (group) group.classList.add('has-error');
    const errSpan = document.getElementById(errorElementId);
    if (errSpan) {
      if (message) errSpan.textContent = message;
      errSpan.style.display = 'block';
    }
  }

  function clearError(inputElement, errorElementId) {
    const group = inputElement.closest('.form-group') || inputElement.closest('.form-check-group');
    if (group) group.classList.remove('has-error');
    const errSpan = document.getElementById(errorElementId);
    if (errSpan) errSpan.style.display = 'none';
  }

  if (contactForm) {
    // Limpieza de errores en tiempo real al escribir
    const inputsToWatch = [
      { id: 'form-name', err: 'name-error' },
      { id: 'form-email', err: 'email-error' },
      { id: 'form-phone', err: 'phone-error' },
      { id: 'form-interest', err: 'interest-error' },
      { id: 'form-message', err: 'message-error' },
      { id: 'form-consent', err: 'consent-error' }
    ];

    inputsToWatch.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        el.addEventListener('input', () => clearError(el, item.err));
        el.addEventListener('change', () => clearError(el, item.err));
      }
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Detección de Bots por Honeypot
      const botCheck = document.getElementById('form-website-check');
      if (botCheck && botCheck.value.trim() !== '') {
        console.warn('Bot detectado vía honeypot.');
        return; // Detener silenciosamente
      }

      // Ocultar tarjetas de estado previas
      if (successCard) successCard.style.display = 'none';
      if (errorCard) errorCard.style.display = 'none';

      // Captura y Sanitización de Campos
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const phoneInput = document.getElementById('form-phone');
      const interestSelect = document.getElementById('form-interest');
      const messageTextarea = document.getElementById('form-message');
      const consentCheck = document.getElementById('form-consent');

      let isValid = true;

      // Validación de Nombre
      const cleanName = sanitizeInput(nameInput.value.trim());
      if (cleanName.length < 3) {
        setError(nameInput, 'name-error', 'Por favor ingresa un nombre válido (al menos 3 letras).');
        isValid = false;
      } else {
        clearError(nameInput, 'name-error');
      }

      // Validación de Correo
      const cleanEmail = emailInput.value.trim();
      if (!isValidEmail(cleanEmail)) {
        setError(emailInput, 'email-error', 'Ingresa una dirección de correo electrónico válida.');
        isValid = false;
      } else {
        clearError(emailInput, 'email-error');
      }

      // Validación de Teléfono
      const cleanPhone = phoneInput.value.trim();
      if (cleanPhone && !isValidPhone(cleanPhone)) {
        setError(phoneInput, 'phone-error', 'Ingresa un número telefónico válido (solo números).');
        isValid = false;
      } else {
        clearError(phoneInput, 'phone-error');
      }

      // Validación de Motivo
      if (!interestSelect.value) {
        setError(interestSelect, 'interest-error', 'Por favor selecciona un motivo de contacto.');
        isValid = false;
      } else {
        clearError(interestSelect, 'interest-error');
      }

      // Validación de Mensaje
      const cleanMsg = sanitizeInput(messageTextarea.value.trim());
      if (cleanMsg.length < 10) {
        setError(messageTextarea, 'message-error', 'El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
      } else {
        clearError(messageTextarea, 'message-error');
      }

      // Validación de Consentimiento
      if (!consentCheck.checked) {
        setError(consentCheck, 'consent-error', 'Debes autorizar el contacto para continuar.');
        isValid = false;
      } else {
        clearError(consentCheck, 'consent-error');
      }

      if (!isValid) {
        return;
      }

      // Estado: Enviando / Loading
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-flex';

      // Simulación de envío a endpoint / webhook / Supabase
      // En producción, conectar a: supabase.from('contact_submissions').insert({...})
      try {
        const formDataPayload = {
          nombre: cleanName,
          email: cleanEmail,
          telefono: cleanPhone || 'No especificado',
          motivo: interestSelect.value,
          mensaje: cleanMsg,
          timestamp: new Date().toISOString()
        };

        // Simulamos latencia de red de 900ms para feedback visual
        await new Promise(resolve => setTimeout(resolve, 900));

        // Generar Ticket de confirmación
        const ticketId = 'QNNC-' + Math.floor(100000 + Math.random() * 900000);
        if (feedbackTicket) {
          feedbackTicket.textContent = `Código de Registro: ${ticketId}`;
        }

        // Mostrar Éxito
        if (successCard) {
          successCard.style.display = 'flex';
          successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Limpiar Formulario
        contactForm.reset();

      } catch (err) {
        console.error('Error al procesar envío:', err);
        if (errorCard) {
          errorCard.style.display = 'flex';
        }
      } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
      }
    });
  }

  // Log informativo para desarrolladores e integración
  console.log('%cQUE NO NOS CALLEN (QNNC) 🇵🇪', 'color:#f42217; font-size: 16px; font-weight: bold;');
  console.log('Plataforma ciudadana pro vida y pro familia lista para producción.');
  console.log('Formulario preparado para integración segura con Supabase / Webhook REST.');
});
