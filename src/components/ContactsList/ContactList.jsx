import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import propTypes from 'prop-types';
import { ContactList } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactList>
      {visibleContacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    })
  ),
  onDeleteContact: propTypes.func,
};
