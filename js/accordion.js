// export default class Accordion {
//   constructor(container) {
//     this.container = container;
//     this.questions = this.container.querySelectorAll('.content-grid__item');

//     if (!this.container) return;

//     this.handleResize = this.handleResize.bind(this);
//     this.init();
//   }

//   init() {
//     this.questions.forEach((question) => {
//       const btn = question.querySelector('.accordion-btn');
//       btn.addEventListener('click', () => {
//         this.toggleQuestion(question);
//       });
//     });

//     if (window.innerWidth < 1025) {
//       this.handleResize();
//     }
//     window.addEventListener('resize', this.handleResize);
//     // this.handleResize(); // Initial setup
//   }

//   toggleQuestion(activeQuestion) {
//     this.questions.forEach((question) => {
//       if (question !== activeQuestion) {
//         question.classList.remove('show-text');
//       }
//     });
//     activeQuestion.classList.toggle('show-text');
//   }

//   handleResize() {
//     this.container.classList.add('mobile-accordion');
//     if (document.documentElement.clientWidth < 1025) {
//       this.container.style.display = 'block';
//     } else {
//       this.container.style.display = 'grid';
//       // this.navLinks.style.height = 'auto';
//       this.container.classList.remove('mobile-accordion');
//     }
//   }
// }

export default class Accordion {
  /**
   * @param {HTMLElement} container - The accordion container
   * @param {Object} options - Optional configuration
   * @param {string} [options.itemSelector='.content-grid__item'] - Selector for accordion items
   * @param {boolean} [options.enableResize=true] - Whether to enable responsive behavior
   */
  constructor(container, options = {}) {
    this.container = container;
    if (!this.container) return;

    // Defaults
    const { itemSelector = '.content-grid__item', enableResize = true } =
      options;

    this.itemSelector = itemSelector;
    this.enableResize = enableResize;

    this.questions = this.container.querySelectorAll(this.itemSelector);

    this.handleResize = this.handleResize.bind(this);
    this.init();
  }

  init() {
    this.questions.forEach((question) => {
      const btn = question.querySelector('.accordion-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          this.toggleQuestion(question);
        });
      }
    });

    if (this.enableResize) {
      if (window.innerWidth < 1025) {
        this.handleResize();
      }
      window.addEventListener('resize', this.handleResize);
    }
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
      this.container.classList.remove('mobile-accordion');
    }
  }
}
