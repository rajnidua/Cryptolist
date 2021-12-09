import React, { useState } from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";
import "../styles/pagination.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pageNums = [];
  const [activeBtnColor, setActiveBtnColor] = useState(0);
  const [pageNumLimit] = useState(5);
  const [maxPageNumLimit, setmaxPageNumLimit] = useState(5);
  const [minPageNumLimit, setminPageNumLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(itemsCount / pageSize); i++) {
    pageNums.push(i);
  }

  const paginate = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const changeBtnColor = (index) => {
    setActiveBtnColor(index);
  };

  const nextBtn = () => {
    onPageChange(currentPage + 1);

    if (currentPage + 1 > maxPageNumLimit) {
      setmaxPageNumLimit(maxPageNumLimit + pageNumLimit);
      setminPageNumLimit(minPageNumLimit + pageNumLimit);
    }
  };

  const prevBtn = () => {
    onPageChange(currentPage - 1);

    if ((currentPage - 1) % pageNumLimit === 0) {
      setmaxPageNumLimit(maxPageNumLimit - pageNumLimit);
      setminPageNumLimit(minPageNumLimit - pageNumLimit);
    }
  };

  return (
    <div className="pagination">
      <button
        className="prev-btn"
        onClick={() => {
          prevBtn();
          changeBtnColor(currentPage - 2);
        }}
        disabled={currentPage === pageNums[0] ? true : false}
      >
        Prev
      </button>

      {pageNums.map((number, index) =>
        number <= maxPageNumLimit && number > minPageNumLimit ? (
          <button
            key={index}
            onClick={() => {
              paginate(number);
              changeBtnColor(index);
            }}
            className={`page-link ${activeBtnColor === index ? "active" : ""}`}
          >
            {number}
          </button>
        ) : null
      )}

      <button
        className="next-btn"
        onClick={() => {
          nextBtn();
          changeBtnColor(currentPage);
        }}
        disabled={currentPage === pageNums[pageNums.length - 1] ? true : false}
      >
        Next
      </button>
    </div>
  );

  Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };
};

export default Pagination;

/* import React from "react";
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
 */
