import { getAllEmployees, setFilteredEmployees } from '../../state/state.js';
import { render } from '../../main.js';
import { setActiveButton, addClickEffect } from '../../helpers/helpers.js';

const statusDropdown = document.getElementById('status-filter');
const searchInput = document.getElementById('search-filter');
const applyButton = document.getElementById('apply-filters');
const resetButton = document.getElementById('reset-filters');

const filterButtons = [applyButton, resetButton];

statusDropdown.addEventListener('change', applyFilters);
applyButton.addEventListener('click', (event) => {
  event.preventDefault();
  setActiveButton(applyButton, filterButtons);
  addClickEffect(applyButton);
  applyFilters();
});
searchInput.addEventListener('input', applyFilters);
resetButton.addEventListener('click', (event) => {
  event.preventDefault();
  setActiveButton(resetButton, filterButtons);
  addClickEffect(resetButton);
  resetFilters();
});

function applyFilters() {
  let filteredEmployees = getAllEmployees();

  const selectedStatus = statusDropdown.value;
  const searchText = searchInput.value.trim().toLowerCase();
  const minSearchLength = 2;

  if (selectedStatus) {
    filteredEmployees = filteredEmployees.filter(
      (employee) => employee.status === selectedStatus
    );
  }

  if (searchText.length >= minSearchLength) {
    filteredEmployees = filteredEmployees.filter((employee) =>
      employee.name.toLowerCase().includes(searchText)
    );
  }

  setFilteredEmployees(filteredEmployees);
  render();
}

function resetFilters() {
  statusDropdown.value = '';
  searchInput.value = '';
  applyFilters();
}
