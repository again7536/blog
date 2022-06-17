import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const StyledSearchBar = styled.input.attrs(props => ({
  ...props,
  className: 'form-control ' + props.className,
  type: 'search',
}))`
  color: ${props => props.theme.colors.red};
  border: none;

  &:focus,
  &:active {
    box-shadow: none;
    border-color: ${props => props.theme.colors.red};
  }
`;

const SearchBar = () => {
  return (
    <div className="w-100 d-inline-flex align-items-center">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-sm mx-3" />
      <StyledSearchBar className="py-3" />
    </div>
  );
};

export { SearchBar };
