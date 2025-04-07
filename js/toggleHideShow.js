export default class ToggleVisibility {
  /**
   * @param {string|HTMLElement} trigger - Element that triggers toggle
   * @param {string|HTMLElement} target - Element to show/hide
   * @param {Object} options
   * @param {boolean} [options.initiallyVisible=false]
   */
  constructor(trigger, target, options = {}) {
    this.trigger =
      typeof trigger === 'string' ? document.querySelector(trigger) : trigger;
    this.target =
      typeof target === 'string' ? document.querySelector(target) : target;
    this.parent =
      this.trigger?.closest('.toggle-wrapper') || this.trigger.parentElement;
    this.isVisible = options.initiallyVisible || false;

    if (!this.trigger || !this.target) return;

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.init();
  }

  init() {
    this.target.style.display = this.isVisible ? 'block' : 'none';

    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate closing
      this.toggle();
    });

    // Listen for outside clicks
    document.addEventListener('click', this.handleDocumentClick);
  }

  toggle() {
    this.isVisible = !this.isVisible;
    this.target.style.display = this.isVisible ? 'block' : 'none';
  }

  show() {
    this.isVisible = true;
    this.target.style.display = 'block';
  }

  hide() {
    this.isVisible = false;
    this.target.style.display = 'none';
  }

  handleDocumentClick(e) {
    if (!this.parent.contains(e.target)) {
      this.hide();
    }
  }
}
