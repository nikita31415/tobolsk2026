document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('.day-card')];
  const toggle = document.querySelector('#toggleAll');

  cards.forEach(card => card.classList.add('collapsed'));

  function updateToggleText() {
    const anyOpen = cards.some(
      card => !card.classList.contains('collapsed')
    );

    toggle.textContent = anyOpen
      ? 'Свернуть все'
      : 'Развернуть все';
  }

  updateToggleText();

  cards.forEach(card => {
    const head = card.querySelector('.day-head');

    head.addEventListener('click', () => {
      card.classList.toggle('collapsed');
      updateToggleText();
    });
  });

  toggle.addEventListener('click', () => {
    const anyOpen = cards.some(
      card => !card.classList.contains('collapsed')
    );

    cards.forEach(card => {
      card.classList.toggle('collapsed', anyOpen);
    });

    updateToggleText();
  });
});
