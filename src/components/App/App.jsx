import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { SectionComponent } from 'components/Section/Section';

export const App = () => {
  return (
    <>
      <SectionComponent title="Add contact">
        <ContactsForm />
      </SectionComponent>
      <SectionComponent title="Filter contacts">
        <FilterContacts />
      </SectionComponent>
      <SectionComponent title="Your Phonebook">
        <ContactsList />
      </SectionComponent>
    </>
  );
};
