import propTypes from 'prop-types';
import {
  FormInput,
  FormLabel,
} from 'components/ContactsForm/ContactsForm.styled';
import { FilterWrapper } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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

FilterContacts.propTypes = {
  filter: propTypes.string,
  filterChange: propTypes.func,
};
