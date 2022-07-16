const theme = document.getElementById('theme')

theme.onclick = () => {
  document.body.classList.toggle('dark-theme')
  if (document.body.classList.contains('dark-theme')) {
    theme.classList = 'fa-solid fa-sun fa-2x'
  } else {
    theme.classList = 'fa-solid fa-cloud-rain fa-2x'
  }
}
