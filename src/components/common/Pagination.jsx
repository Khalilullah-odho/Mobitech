import React from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <NavLink
                to="#"
                style={{ cursor: "pointer" }}
                className="page-link"
                onClick={() => onPageChange(page)}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
