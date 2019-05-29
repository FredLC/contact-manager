import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        phone: "777-777-7777"
      },
      {
        id: 3,
        name: "Joe Marambi",
        email: "joemarambi@gmail.com",
        phone: "819-918-8199"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
