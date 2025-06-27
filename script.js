document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.elements['name'].value;
    alert(`Спасибо, ${name}! Мы получили ваше сообщение.`);
    this.reset();
  });
});