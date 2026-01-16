import {
  getCurrentPage,
  getFilteredEmployees,
  getItemsPerPage,
} from '../../state/state.js';
import { createEmployeeCard } from '../employee-card/employee-card.js';
import { updateRecentlyViewedList } from '../recently-viewed/recently-viewed.js';

const employeesListElement = document.getElementById('employees-list');
const resultCountElement = document.getElementById('result-count');

export function renderEmployeeList() {
  employeesListElement.innerHTML = '';

  const filteredEmployees = getFilteredEmployees();
  const currentPage = getCurrentPage();
  const itemsPerPage = getItemsPerPage();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const employeesToDisplay = filteredEmployees.slice(startIndex, endIndex);

  employeesToDisplay.forEach((employee) => {
    const card = createEmployeeCard(employee, updateRecentlyViewedList);
    employeesListElement.appendChild(card);
  });

  resultCountElement.textContent = `Results: ${filteredEmployees.length}`;
}
