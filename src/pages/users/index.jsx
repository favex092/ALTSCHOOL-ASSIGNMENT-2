import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../utils/Pagination";

const Users = ({ resultFromApi }) => {
  const [postPerPage] = useState(20);
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastPage = postPerPage * currentPage; // 10
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 0
  const ModifiedUserst = resultFromApi?.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); // (0, 5)

  return (
    <>
      <div className="user-title-text">
        <h2>List of all Users</h2>
      </div>
      {ModifiedUserst.length !== 0 ? (
        <div>
          <div style={{ margin: "0 1em" }}>
            {ModifiedUserst.map((data, index) => {
              return (
                <div key={index}>
                  <div className="profile-tile">
                    <div className="pic-tile">
                      <img src={data.picture.medium} alt="dp" />
                    </div>
                    <div className="info-tile">
                      <h4>
                        {data.name.last} {data.name.first}
                      </h4>
                      <div className="info-box" key={index}>
                        <p> {data.email}</p>
                        <p> {data.cell}</p>
                        <Link to={`/users/${data.login.uuid}`}>
                          View profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            resultFromApi={resultFromApi} // All the 100 Result
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
        </div>
      ) : (
        <h1 style={{ textAlign: "center", margin: "1em 0" }}>Loading ....</h1>
      )}
    </>
  );
};

export default Users;