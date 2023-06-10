import React from 'react';

import { ContactList } from './ContactList/ContactList';
import { ContactsForm } from './Form/FormContacts';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from './store/selectors';

export function App() {
  const items = useSelector(getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h1>Contacts</h1>
      {items.length > 1 && <Filter />}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Add some contacts</p>
      )}
    </Container>
  );
}