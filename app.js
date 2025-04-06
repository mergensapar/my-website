

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfayı yavaşça en üste kaydırır
  }

 function searchFunction() {
      const input = document.getElementById('searchBox');
      const icon = document.getElementById('searchIcon');

      if (input.value.length > 0) {
        icon.textContent = '✖'; // X'e dönüşsün
      } else {
        icon.textContent = '🔍'; // Boşsa tekrar büyüteç
      }
    }

    function toggleClear() {
      const input = document.getElementById('searchBox');
      const icon = document.getElementById('searchIcon');

      if (input.value.length > 0) {
        input.value = '';
        icon.textContent = '🔍';
        input.focus();
      }
    }

    function toggleHome() {
        const section = document.getElementById('homeSection');
        if (section.style.display === 'none' || section.style.display === '') {
          section.style.display = 'block';
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          section.style.display = 'none';
        }
      }