import { addToRecentlyViewed } from '../../state/state';
import { updateRecentlyViewedList } from '../recently-viewed/recently-viewed';

export function createEmployeeCard(employee) {
  const card = document.createElement('article');
  const statusClass = employee.status === 'good' ? 'good' : 'naughty';
  card.innerHTML = `
    <button class="employee-header">
      <span class="employee-name">${employee.name}</span>
      <div class="header-right">
        <span class="status-badge ${statusClass}" >${employee.status}</span>
        <i class="bi bi-chevron-down accordion-icon"></i>
      </div>
    </button>
    <div class="employee-details" id="details-${employee.id}">
      <dl>
        <dt>Location:</dt>
        <dd>${employee.location}</dd>
        
        <dt>Desired Present:</dt>
        <dd><strong>${employee.desiredPresent}</strong></dd>
        
        <dt>Notes:</dt>
        <dd>${employee.notes}</dd>
      </dl>
    </div>
  `;

  const header = card.querySelector('.employee-header');
  const details = card.querySelector('.employee-details');
  header.addEventListener('click', () => {
    const accordionIcon = header.querySelector('.accordion-icon');

    toggleAccordion(details);

    if (details.classList.contains('open')) {
      accordionIcon.classList.remove('bi-chevron-down');
      accordionIcon.classList.add('bi-chevron-up');

      header.classList.add('active');
    } else {
      accordionIcon.classList.remove('bi-chevron-up');
      accordionIcon.classList.add('bi-chevron-down');

      header.classList.remove('active');
    }

    addToRecentlyViewed(employee.id);
    updateRecentlyViewedList();
  });

  function toggleAccordion(details) {
    const isOpen = details.classList.contains('open');

    if (isOpen) {
      details.classList.remove('open');
      details.style.display = 'none';
    } else {
      details.classList.add('open');
      details.style.display = 'block';
    }
  }

  return card;
}
