import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import classes from "./Pagination.module.scss";

const Pagination = ({
  coursiesPerPage,
  totalCourses,
  selectPageHandler,
  currentPage,
  PrevPageHandler,
  NextPageHandler
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursiesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className={classes.pagination}>
      <li>
        <button
          className={classes.navigation__button}
          onClick={PrevPageHandler}
        >
          <AiOutlineArrowLeft />
        </button>
      </li>
      {pageNumber.map((number) => (
        <li key={number}>
          <button
            className={`${classes.pagination__item} ${
              currentPage === number && classes.active
            }`}
            href="#"
            onClick={() => selectPageHandler(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          className={classes.navigation__button}
          onClick={NextPageHandler}
        >
          <AiOutlineArrowRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
