import React from 'react';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDelete(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
