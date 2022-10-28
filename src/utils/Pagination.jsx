import React from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Pagination = ({
  resultFromApi,
  postPerPage,
  currentPage,
  setcurrentPage,
}) => {
  const PaginationNumber = [];

  for (let i = 1; i < Math.ceil(resultFromApi.length / postPerPage); i++) {
    PaginationNumber.push(i);
  }

  const PageGetUrl = (val) => {
    setcurrentPage(val);
  };

  const PageGetUrlByArrow = (num) => {
    if (num <= PaginationNumber.length && num > 0) {
      setcurrentPage(num);
    } else {
      return;
    }
  };

  return (
    <div className="pagination-flex-box">
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage - 1)}
      >
        <BsFillArrowLeftCircleFill />
      </h2>
      {PaginationNumber.map((data, index) => {
        return (
          <li
            className="pagination-boxes"
            onClick={() => PageGetUrl(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage + 1)}
      >
        <BsFillArrowRightCircleFill />
      </h2>
    </div>
  );
};

export default Pagination;