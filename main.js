document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.twelfth-section__div-info');

  faqItems.forEach((faqItem) => {
    const button = faqItem.querySelector('.twelfth-section__btns');
    const iconUp = button.querySelector('#icon-up');
    const iconTurnDown = button.querySelector('#icon-turn-down');
    const description = faqItem.nextElementSibling; 

    button.addEventListener('click', function() {
      if (description.style.display === 'none') {
        description.style.display = 'block';
        iconUp.style.display = 'inline';
        iconTurnDown.style.display = 'none';
      } else {
        description.style.display = 'none';
        iconUp.style.display = 'none';
        iconTurnDown.style.display = 'inline';
      }
    });
  });
});