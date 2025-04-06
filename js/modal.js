export default class Modal {
  constructor(triggerSelector) {
    this.triggers = document.querySelectorAll(triggerSelector);

    this.triggers.forEach((trigger) => {
      const modalId = trigger.getAttribute('data-modal-id');
      const modal = document.getElementById(modalId);
      const closeBtn = modal.querySelector('.close-btn');

      trigger.addEventListener('click', () => {
        modal.classList.add('open-modal');
      });

      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open-modal');
      });

      // Optional: close on clicking outside modal content
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open-modal');
        }
      });
    });
  }
}
