

import { deleteContact } from 'components/store/ContactListSlice';
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredContactsList } from 'components/store/selectors';

export function ContactList() { 

  const filteredContactsList = useSelector(getFilteredContactsList);
  const dispatch = useDispatch();

  const onContactDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>{filteredContactsList.map(contact => (
      <li key={contact.id}>
        <p> {contact.name}:  {contact.number}</p>
        <button onClick={() => onContactDelete(contact.id)}>
          Delete</button>
      </li>
    ))}
    </ul>);
};