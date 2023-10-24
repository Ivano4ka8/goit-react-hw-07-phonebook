import {
  FormInput,
  FormLabel,
} from 'components/ContactsForm/ContactsForm.styled';
import { FilterWrapper } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <FilterWrapper>
      <FormLabel>
        Find contacts by name
        <FormInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FormLabel>
    </FilterWrapper>
  );
};
