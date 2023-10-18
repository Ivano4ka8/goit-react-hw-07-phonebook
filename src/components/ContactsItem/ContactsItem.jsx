import propTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './ContactsItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <ContactItem key={id}>
        {name}: {phone}
        <ButtonDelete type="button" onClick={handleDelete}>
          Delete
        </ButtonDelete>
      </ContactItem>
    </>
  );
};

ContactsItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  phone: propTypes.string,
  onDeleteContact: propTypes.func,
};
