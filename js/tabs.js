import Accordion from './accordion.js';

export default class Tabs {
  constructor(wrapperSelector, tabBtnSelector, tabContentSelector) {
    this.wrapperSelector = wrapperSelector;
    this.tabBtnSelector = tabBtnSelector;
    this.tabContentSelector = tabContentSelector;

    this.wrapper = document.querySelector(wrapperSelector);
    this.tabButtons = document.querySelectorAll(tabBtnSelector);
    this.tabContents = document.querySelectorAll(tabContentSelector);

    this.tabCount = this.tabButtons.length;

    this.init();
  }

  init() {
    if (!this.wrapper) return;
    this.wrapper.addEventListener('click', (e) => this.handleTabClick(e));

    const addNewBtn = this.wrapper.querySelector('.btn-add-new-tab');
    if (addNewBtn) {
      addNewBtn.addEventListener('click', () => this.addNewTab());
    }
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

  addNewTab() {
    this.tabCount += 1;
    const newTabId = `chart-${this.tabCount}`;

    // Create new tab button
    const newButton = document.createElement('button');
    newButton.className = 'tab-btn';
    newButton.dataset.id = newTabId;
    newButton.textContent = `Chart ${this.tabCount}`;

    // Insert before "Add New" button
    const addBtn = this.wrapper.querySelector('.btn-add-new-tab');
    addBtn.parentNode.insertBefore(newButton, addBtn);

    // Create new content
    const newContent = document.createElement('div');
    newContent.className = 'content';
    newContent.id = newTabId;
    newContent.innerHTML = `
      <div class="content-grid mobile-accordion" style="display: grid;">
        <article class="content-grid__item">
          <h4 class="heading text-center">
            1. Properties
            <button type="button" class="btn btn-fontawesome accordion-btn">
              <span class="plus-icon"><i class="far fa-plus-square"></i></span>
              <span class="minus-icon"><i class="far fa-minus-square"></i></span>
            </button>
          </h4>
          <div class="for-mobile-accordion">
            <form class="form-properties">
              Start FORM HERE
            </form            
          </div>
        </article>
        <article class="content-grid__item">
          <h4 class="heading text-center">
            2. Composition
            <button type="button" class="btn btn-fontawesome accordion-btn">
              <span class="plus-icon"><i class="far fa-plus-square"></i></span>
              <span class="minus-icon"><i class="far fa-minus-square"></i></span>
            </button>
          </h4>
          <div class="for-mobile-accordion">
            <div class="text-center">
              <button class="btn btn-large btn-primary btn-chart-item">
                Apply Composition
              </button>
            </div>
          </div>
        </article>
        <article class="content-grid__item">
          <h4 class="heading text-center">
            3. Chart Composition
            <button type="button" class="btn btn-fontawesome accordion-btn">
              <span class="plus-icon"><i class="far fa-plus-square"></i></span>
              <span class="minus-icon"><i class="far fa-minus-square"></i></span>
            </button>
          </h4>
          <div class="for-mobile-accordion">
            <div class="text-center">
              <button class="btn btn-large btn-primary btn-chart-item">
                Chart Biomaterials Formula
              </button>
            </div>
          </div>
        </article>
      </div>
    `;

    this.wrapper.querySelector('.tabs-content').appendChild(newContent);

    // Initialize Accordion on the newly added content
    const newAccordionContainer = newContent.querySelector('.content-grid');
    if (newAccordionContainer) {
      new Accordion(newAccordionContainer, {
        itemSelector: '.content-grid__item',
        enableResize: true,
      });
    }

    // Refresh button and content references
    this.tabButtons = this.wrapper.querySelectorAll(this.tabBtnSelector);
    this.tabContents = this.wrapper.querySelectorAll(this.tabContentSelector);

    // Simulate click on the new tab to activate it
    newButton.click();
  }
}
