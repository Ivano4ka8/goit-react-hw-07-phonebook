import { ContactsItem, ButtonDelete } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ info: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactsItem>
      {name}:<br />
      {phone}
      <ButtonDelete type="button" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </ContactsItem>
  );
};
