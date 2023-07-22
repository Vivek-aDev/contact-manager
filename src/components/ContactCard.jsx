import React from "react";
import user from '../images/user.png'

export const ContactCard = (props) => {
  const { id, name, email } = props.list;
  return (
    <div className="item" key={id}>
      <img src={user} alt="" className="ui avatar image"/>
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
