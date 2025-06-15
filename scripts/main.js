document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('collapse-toggle');
  const container = document.querySelector('.container');

  toggle.addEventListener('click', () => {
    container.classList.toggle('collapsed');
  });
});
