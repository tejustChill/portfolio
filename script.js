const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(event.target.hash.slice(1));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// const titleLine = document.getElementById('title-line');

// const words = titleLine.textContent.split(' ');

// titleLine.innerHTML = '';

// words.forEach((word, index) => {
//   const span = document.createElement('span');
//   span.textContent = word;
//   span.classList.add('wave');
//   titleLine.appendChild(span);

//   if (index !== words.length - 1) {
//     span.style.marginRight = '5px';
//   }
// });

// Replace with your Font Awesome kit code if needed
const icons = document.querySelectorAll('.fas');
icons.forEach(icon => {
  icon.classList.add('fa-3x');
});
