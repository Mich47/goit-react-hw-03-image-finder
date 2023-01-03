import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { Section } from './Phonebook/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsInLS = localStorage.getItem('contacts');
    if (contactsInLS) {
      this.setState({ contacts: JSON.parse(contactsInLS) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (event, name, number) => {
    event.preventDefault();
    return this.handleAddedContact(name, number);
  };

  handleAddedContact = (name, number) => {
    const { contacts } = this.state;
    //Контакт вже існує, повертає false
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    //Інакше додає новий контакт, повертає true
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
    return true;
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  handleFilterContacts = filter => {
    const { contacts } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const renderContacts = filter
      ? this.handleFilterContacts(filter)
      : contacts;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleSubmitForm} />
        </Section>
        <Section title="Contacts" headingLevel="h2">
          <Filter filter={filter} onChange={this.handleChange} />
          <ContactList
            contacts={renderContacts}
            onDelete={this.handleDeleteContact}
          />
        </Section>
      </>
    );
  }
}
