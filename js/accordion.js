export default class Accordion {
  constructor(container) {
    this.container = container;
    //  this.questions = this.container.querySelectorAll(accordionItem);
    this.questions = this.container.querySelectorAll('.content-grid__item');

    if (!this.container) return;

    this.handleResize = this.handleResize.bind(this);
    this.init();
  }

  init() {
    this.questions.forEach((question) => {
      const btn = question.querySelector('.accordion-btn');
      btn.addEventListener('click', () => {
        this.toggleQuestion(question);
      });
    });

    if (window.innerWidth < 1025) {
      this.handleResize();
    }
    window.addEventListener('resize', this.handleResize);
    // this.handleResize(); // Initial setup
  }

  toggleQuestion(activeQuestion) {
    this.questions.forEach((question) => {
      if (question !== activeQuestion) {
        question.classList.remove('show-text');
      }
    });
    activeQuestion.classList.toggle('show-text');
  }

  handleResize() {
    this.container.classList.add('mobile-accordion');
    if (document.documentElement.clientWidth < 1025) {
      this.container.style.display = 'block';
    } else {
      this.container.style.display = 'grid';
      // this.navLinks.style.height = 'auto';
      this.container.classList.remove('mobile-accordion');
    }
  }
}
