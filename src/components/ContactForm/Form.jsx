import React from 'react';
import { StyledButton, StyledInput, StyledLabel } from './Form.styled';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <StyledLabel>
          Name:
          <StyledInput
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            pattern="^([a-zA-Z]|\s)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeInput}
          />
        </StyledLabel>
        <StyledLabel>
          Tel:
          <StyledInput
            type="tel"
            name="number"
            placeholder="Enter your number"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChangeInput}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </form>
    );
  }
}
