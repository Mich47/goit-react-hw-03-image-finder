import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

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

  componentDidMount() {}

  componentDidUpdate(_, prevState) {}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (event, name, number) => {
    event.preventDefault();
    return this.handleAddedContact(name, number);
  };

  render() {
    return (
      <>
        <Searchbar></Searchbar>
        {/* <Section title="Phonebook">
          <ContactForm onSubmit={this.handleSubmitForm} />
        </Section>
        <Section title="Contacts" headingLevel="h2">
        </Section> */}
      </>
    );
  }
}
