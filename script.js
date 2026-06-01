document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.day-card'));
  const toggle = document.getElementById('toggleAll');
  const toggleText = document.getElementById('toggleAllText');

  if (!toggle || !toggleText || cards.length === 0) {
    return;
  }

  function updateToggleText() {
    const hasOpenCard = cards.some(card => !card.classList.contains('collapsed'));
    toggleText.textContent = hasOpenCard ? 'Свернуть все' : 'Развернуть все';
  }

  cards.forEach(card => {
    card.classList.add('collapsed');
  });

  updateToggleText();

  cards.forEach(card => {
    const head = card.querySelector('.day-head');

    if (!head) {
      return;
    }

    head.addEventListener('click', () => {
      card.classList.toggle('collapsed');
      updateToggleText();
    });
  });

  toggle.addEventListener('click', () => {
    const hasOpenCard = cards.some(card => !card.classList.contains('collapsed'));

    cards.forEach(card => {
      card.classList.toggle('collapsed', hasOpenCard);
    });

    updateToggleText();
  });
});
