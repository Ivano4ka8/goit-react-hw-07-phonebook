import {
  Form,
  FormLabel,
  FormInput,
  ButtonSubmit,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isExist = contacts.find(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isExist) {
      alert(`${form.elements.name.value} is already in contacts.`);
      form.reset();
      return;
    }

    dispatch(
      addContacts({
        name: form.elements.name.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Phone
        <FormInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};
