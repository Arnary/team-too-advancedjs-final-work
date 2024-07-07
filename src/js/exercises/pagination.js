import { range } from 'lodash';

export default class Pagination {
  constructor(element, onClickHandler) {
    this.element = document.querySelector(element);
    this.element.addEventListener('click', event => {
      if (event.target.nodeName !== 'BUTTON') {
        return;
      }
      onClickHandler(parseInt(event.target.dataset.page));
      this.scrollToParent();
    });
  }

  render(currentPage, totalPages) {
    this.element.innerHTML = '';

    if (totalPages < 1) {
      return;
    }

    this.element.innerHTML = range(1, totalPages + 1)
      .map(page => {
        const active = page === currentPage ? 'active' : '';
        return `
          <button data-page="${page}" class="pagination-button ${active}">
          ${page}
          </button>
        `;
      })
      .join('');
  }

  scrollToParent() {
    const wrapper = this.element.closest('section');
    wrapper.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
