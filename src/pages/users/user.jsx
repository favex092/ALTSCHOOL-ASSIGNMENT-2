import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Users = ({ resultFromApi }) => {
  let { id } = useParams();

  const NewFilteredArray = resultFromApi.find((val) => val.login.uuid === id);

  return (
    <>
      {NewFilteredArray ? (
        <>
          <br />
          <div className="user-title-text">
            <Link to={-1}>back</Link>
            <br />
            <h2> {NewFilteredArray.name.last}'s Profile</h2>
            <br />
          </div>
          <div style={{ margin: "0 1em" }}>
            <div>
              <div className="user-profile-tile">
                <div className="user-pic-tile">
                  <img
                    src={NewFilteredArray.picture.large}
                    alt="dp"
                  />
                </div>
                <div className="info-tile">
                  <h4>
                    {NewFilteredArray.name.last} {NewFilteredArray.name.first}
                  </h4>
                  <div className="info-box">
                    <p> {NewFilteredArray.email}</p>
                    <p> {NewFilteredArray.cell}</p>
                    <a href={`tel:${NewFilteredArray.cell}`}>Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 style={{ textAlign: "center", margin: "1em 0" }}>Loading ....</h1>
      )}
    </>
  );
};

export default Users;