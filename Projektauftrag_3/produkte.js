document.addEventListener('DOMContentLoaded', () => {
  const d = document;

  const buttons = d.querySelectorAll('.kategorie-tab');
  const produkte = d.querySelectorAll('.produkt');
  if (buttons.length && produkte.length) {
    const filterProdukte = kategorie => {
      buttons.forEach(btn => {
        const kat = btn.getAttribute('data-kategorie');
        btn.classList.toggle('active', kat === kategorie);
      });
      produkte.forEach(p => {
        const kat = p.getAttribute('data-kategorie');
        p.style.display = (kategorie === 'alle' || kat === kategorie) ? 'block' : 'none';
      });
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => filterProdukte(btn.getAttribute('data-kategorie')));
    });

    const params = new URLSearchParams(window.location.search);
    filterProdukte(params.get('kat') || 'alle');
  }


  const input = d.querySelector('#anzahl');
  if (input) {
    d.querySelector('.decrease')?.addEventListener('click', () => {
      input.value = Math.max(1, +input.value - 1);
    });
    d.querySelector('.increase')?.addEventListener('click', () => {
      input.value = Math.min(10, +input.value + 1);
    });
  }

  document.querySelector(".order-form").addEventListener("submit", function(event) {
    alert("Vielen Dank für Ihren Kauf! Ihre Bestellung wurde bestätigt.");
});
});
