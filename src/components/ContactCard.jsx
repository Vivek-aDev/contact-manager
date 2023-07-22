import React from "react";

export const ContactCard = (props) => {
  const { id, name, email } = props.list;
  return (
    <div className="item" key={id}>
      <div className="content">
        <div className="header">
          {name}
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "8px" }}
        ></i>
      </div>
    </div>
  );
};
