import { getAllEmployees } from '../../state/state';

const totalCountSpan = document.getElementById('total-count');
const positiveCountSpan = document.getElementById('positive-count');
const negativeCountSpan = document.getElementById('negative-count');

export function setStatistics() {
  const employees = getAllEmployees();

  let goodCount = 0;
  let naughtyCount = 0;

  employees.forEach((employee) => {
    if (employee.status === 'good') {
      goodCount++;
    } else if (employee.status === 'naughty') {
      naughtyCount++;
    }
  });

  totalCountSpan.textContent = employees.length;
  positiveCountSpan.textContent = goodCount;
  negativeCountSpan.textContent = naughtyCount;
}
