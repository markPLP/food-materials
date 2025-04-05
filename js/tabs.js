// Tabs.js
export default class Tabs {
  constructor(wrapperSelector, tabBtnSelector, tabContentSelector) {
    this.wrapper = document.querySelector(wrapperSelector);
    this.tabButtons = document.querySelectorAll(tabBtnSelector);
    this.tabContents = document.querySelectorAll(tabContentSelector);

    this.init();
  }

  init() {
    if (!this.wrapper) return;
    this.wrapper.addEventListener('click', (e) => this.handleTabClick(e));
  }

  handleTabClick(e) {
    const id = e.target.dataset.id;
    if (!id) return;

    this.deactivateAllButtons();
    this.activateButton(e.target);

    this.deactivateAllContents();
    this.activateContentById(id);
  }

  deactivateAllButtons() {
    this.tabButtons.forEach((btn) => btn.classList.remove('active'));
  }

  activateButton(button) {
    button.classList.add('active');
  }

  deactivateAllContents() {
    this.tabContents.forEach((tab) => tab.classList.remove('active'));
  }

  activateContentById(id) {
    const content = document.getElementById(id);
    if (content) content.classList.add('active');
  }
}
