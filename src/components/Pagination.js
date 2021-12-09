import React from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";

const Pagination = (props) => {
  console.log(props);
  console.log("itemscount is:" + props.itemsCount);
  console.log("page size is:" + props.pageSize);
  console.log("current page is:" + props.currentPage);

  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
