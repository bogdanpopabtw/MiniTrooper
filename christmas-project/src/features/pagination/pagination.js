import {
  getFilteredEmployees,
  getCurrentPage,
  getItemsPerPage,
  setCurrentPage,
} from '../../state/state.js';
import { render } from '../../main.js';
import { addClickEffect } from '../../helpers/helpers.js';

const pageInfoTop = document.getElementById('page-info-top');
const prevTop = document.getElementById('prev-page-top');
const nextTop = document.getElementById('next-page-top');

const pageInfoBottom = document.getElementById('page-info-bottom');
const prevBottom = document.getElementById('prev-page-bottom');
const nextBottom = document.getElementById('next-page-bottom');

const allButtons = [
  pageInfoTop,
  prevTop,
  nextTop,
  pageInfoBottom,
  prevBottom,
  nextBottom,
];

function getTotalPages() {
  const filteredEmployees = getFilteredEmployees();
  const itemsPerPage = getItemsPerPage();
  return Math.ceil(filteredEmployees.length / itemsPerPage);
}

export function updatePagination() {
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  pageInfoTop.textContent = `Page ${currentPage} of ${totalPages}`;
  pageInfoBottom.textContent = `Page ${currentPage} of ${totalPages}`;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  prevTop.disabled = isFirstPage;
  prevBottom.disabled = isFirstPage;

  nextTop.disabled = isLastPage;
  nextBottom.disabled = isLastPage;

  [prevTop, prevBottom, nextTop, nextBottom].forEach((btn) =>
    btn.classList.remove('active')
  );

  if (!isFirstPage) {
    prevTop.classList.add('active');
    prevBottom.classList.add('active');
  }

  if (!isLastPage) {
    nextTop.classList.add('active');
    nextBottom.classList.add('active');
  }
}

function goPrev() {
  const currentPage = getCurrentPage();
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    render();
  }
}

function goNext() {
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    render();
  }
}

prevTop.addEventListener('click', goPrev);
prevBottom.addEventListener('click', goPrev);
nextTop.addEventListener('click', goNext);
nextBottom.addEventListener('click', goNext);

allButtons.forEach(addClickEffect);
