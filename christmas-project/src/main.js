import employeesData from './data/employee-data.json';
import { initializeEmployeesState } from './state/state.js';
import { renderEmployeeList } from './features/employee-list/employee-list.js';
import { updatePagination } from './features/pagination/pagination.js';
import { setStatistics } from './features/statistics/statistics.js';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/main.css';
import './styles/variables.css';
import './features/filter-form/filter-form.js';

initializeEmployeesState(employeesData);

export function render() {
  renderEmployeeList();
  updatePagination();
  setStatistics();
}

render();
