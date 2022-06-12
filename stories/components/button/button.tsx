import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  className: `btn btn-${props.color}`,
}))``;

export { Button };
