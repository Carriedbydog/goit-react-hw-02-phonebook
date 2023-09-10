import React from 'react';

import { Form } from './ContactForm/Form';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleContactDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter } = this.state;
    const filteredData = this.filterContacts();
    const deleteContact = this.handleContactDelete;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>PhoneBook</h1>
          <Form
            onSubmit={this.formSubmitHandler}
            onAddContact={this.handleAddContact}
          />
          <h2>Contacts</h2>
          <Filter
            inputFilterData={this.handleChangeFilter}
            filterValue={filter}
          />
          <ContactList contacts={filteredData} onDelete={deleteContact} />
        </div>
      </div>
    );
  }
}
