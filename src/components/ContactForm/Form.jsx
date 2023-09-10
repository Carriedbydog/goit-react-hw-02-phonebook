import React from 'react';
import { nanoid } from 'nanoid';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleAddContact = () => {
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    // if (this.state.name) {
    //   alert(`${this.state.name} is already in contacts`);
    // }
    this.setState({
      name: '',
      number: '',
    });
    this.props.onAddContact(contact);
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChangeInput}
            />
          </label>
          <label>
            Tel
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChangeInput}
            />
          </label>
          <button onClick={this.handleAddContact} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
