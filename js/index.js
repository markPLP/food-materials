import initNavToggle from './navCollapse.js';
import Tabs from './tabs.js';
import Accordion from './accordion.js';
import Modal from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the navigation toggle functionality
  initNavToggle();

  // Initialize the tabs functionality in chart property page
  new Tabs('.chart-property-tab', '.tab-btn', '.content');

  document.querySelectorAll('.content-grid').forEach((accordionElement) => {
    new Accordion(accordionElement);
  });

  new Modal('.modal-trigger');
});
