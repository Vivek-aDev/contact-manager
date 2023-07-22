import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = (props) => {
  console.log(props);

  const showContactList = props.list.map((contact) => {
    return (
      <ContactCard list={contact}/>
    );
  });

  return <div className="ui celled list">{showContactList}</div>;
};
