const themeToggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.thumb-icon');

function updateTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);

  // Fade out 효과
  icon.style.opacity = '0';
  
  // 짧은 지연 후 아이콘 변경
  setTimeout(() => {
    icon.textContent = isDark
      ? 'dark_mode'
      : 'light_mode';
    
    // Fade in 효과
    icon.style.opacity = '1';
  }, 150);

  localStorage.setItem(
    'theme',
    isDark ? 'dark' : 'light'
  );
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  themeToggle.checked = true;
  updateTheme(true);
}

themeToggle.addEventListener('change', () => {
  updateTheme(themeToggle.checked);
});