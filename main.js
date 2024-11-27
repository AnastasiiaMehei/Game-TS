document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.twelfth-section__div');

  faqItems.forEach((faqItem) => {
    const button = faqItem.querySelector('.twelfth-section__btns');
    const description = faqItem.querySelector('.twelfth-section__description');
    const icon = button.querySelector('.twelfth-section__icons use');

    button.addEventListener('click', function() {
      // Переключаем видимость описания
      if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        icon.setAttribute('href', '#icon-turn-down');
      } else {
        description.style.display = 'none';
        icon.setAttribute('href', '#icon-up');
      }
    });
  });
});