const darkModeElement = document.querySelector('.dark-mode-toggle');
const inputElement = document.getElementById('input-element');
let darkModeCounter = 0;

darkModeElement.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.dark-mode-icon').classList.toggle('dark-mode-icon-dark-mode');
  document.querySelector('.dark-mode-icon').classList.toggle('rotate');
  document.querySelector('.dark-mode-toggle').classList.toggle('dark-mode-toggle-dark-mode');
  document.querySelector('.location').classList.toggle('location-dark-mode');
  document.querySelector('.url').classList.toggle('url-dark-mode');
  document.querySelector('.twitter').classList.toggle('twitter-dark-mode');
  document.querySelector('.office').classList.toggle('office-dark-mode');
  darkModeCounter++;
  if (darkModeCounter % 2 === 0) {
    document.querySelector('.dark-mode-text').innerHTML = 'DARK';
  } else {
    document.querySelector('.dark-mode-text').innerHTML = 'LIGHT';
  }
});

document.querySelector('.search-button').addEventListener('click', () => {
  noResults();
});

inputElement.addEventListener('keydown', event => {
  event.key === 'Enter' && noResults();
});

function noResults() {
  if (inputElement.value) {
    setTimeout(() => {
      document.querySelector('.no-results').classList.remove('show');
    }, 3000);
    document.querySelector('.no-results').classList.add('show');
  }
}