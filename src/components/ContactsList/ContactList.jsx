import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { ContactList } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} info={contact} />
      ))}
    </ContactList>
  );
};
