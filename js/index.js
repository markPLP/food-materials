import initNavToggle from './navCollapse.js';
import Tabs from './tabs.js';
import Accordion from './accordion.js';
import Modal from './modal.js';
import ToggleVisibility from './toggleHideShow.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the navigation toggle functionality
  initNavToggle();

  // Initialize the accordion functionality
  document.querySelectorAll('.content-grid').forEach((accordionElement) => {
    new Accordion(accordionElement, {
      itemSelector: '.content-grid__item', // accrordion item selector
      enableResize: true, // or false to skip resize logic
    });
  });
  // Initialize accordion show saved charts
  document
    .querySelectorAll('.saved-charts-accordion-wrapper')
    .forEach((accordionElement) => {
      new Accordion(accordionElement, {
        itemSelector: '.saved-charts-accordion-item', // accrordion item selector
        enableResize: false, // or false to skip resize logic
      });
    });
  // Initialize accordion search results
  document
    .querySelectorAll('.search__results__wrapper')
    .forEach((accordionElement) => {
      new Accordion(accordionElement, {
        itemSelector: '.search__results_item', // accrordion item selector
        enableResize: false, // or false to skip resize logic
      });
    });

  document
    .querySelectorAll('.nested-accordion-wrapper')
    .forEach((accordionElement) => {
      new Accordion(accordionElement, {
        itemSelector: '.nested-accordion-item', // accrordion item selector
        enableResize: false, // or false to skip resize logic
      });
    });

  // Initialize the tabs functionality in chart property page
  new Tabs('.chart-property-tab', '.tab-btn', '.content');

  new Modal('.modal-trigger');
  // toggle show saved charts button
  const toggle = new ToggleVisibility(
    '#toggle-saved-charts-btn',
    '#toggle-saved-charts',
    {
      initiallyVisible: false,
    }
  );
});
