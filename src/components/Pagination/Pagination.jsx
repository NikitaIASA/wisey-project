import React from "react";

import classes from './Pagination.module.scss';

const Pagination = ({ coursiesPerPage, totalCourses, selectPageHandler }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursiesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className={classes.pagination}>
      {pageNumber.map((number) => (
        <li className={classes.pagination__item} key={number}>
          <a href="#" onClick={() => selectPageHandler(number)}>{number}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
