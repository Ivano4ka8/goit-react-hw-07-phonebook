import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { SectionComponent } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';
import { Loader } from 'components/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionComponent title="Add contact">
        <ContactsForm />
      </SectionComponent>
      <SectionComponent title="Filter contacts">
        <FilterContacts />
      </SectionComponent>
      <SectionComponent title="Your Phonebook">
        {error && alert('Something went wrong')}
        {isLoading && <Loader />}
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <p>Sorry, you don't have any contacts</p>
        )}
      </SectionComponent>
    </>
  );
};
