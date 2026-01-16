import { getRecentlyViewed, getAllEmployees } from '../../state/state.js';

export function updateRecentlyViewedList() {
  const recentlyViewedList = document.getElementById('recent-employees');

  recentlyViewedList.innerHTML = '';

  const ids = getRecentlyViewed();
  const allEmployees = getAllEmployees();

  ids.forEach((id) => {
    const employee = allEmployees.find((emp) => emp.id === id);
    if (employee) {
      const nameElement = document.createElement('p');
      nameElement.textContent = employee.name;
      recentlyViewedList.appendChild(nameElement);
    }
  });
}
