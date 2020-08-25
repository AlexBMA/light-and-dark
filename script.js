const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('Image1');
const image2 = document.getElementById('Image2');
const image3 = document.getElementById('Image3');
const textBox = document.getElementById('text-box');

function modeHelperImage(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function modeHelperToogleIcon(theme, addTheme, removeTheme) {
  toggleIcon.children[0].textContent = `${theme} Mode`;
  toggleIcon.children[1].classList.replace(
    `fa-${removeTheme}`,
    `fa-${addTheme}`
  );
}

function toogleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(0 0 0/ 50%)'
    : 'rgb(255 255 255/ 50%)';
  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255/ 50%)'
    : 'rgb(0 0 0/ 50%)';

  isDark
    ? modeHelperToogleIcon('Dark', 'moon', 'sun')
    : modeHelperToogleIcon('Light', 'sun', 'moon');
  isDark ? modeHelperImage('dark') : modeHelperImage('light');
}

//Switch Theme
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toogleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toogleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toogleDarkLightMode(true);
  }
}
