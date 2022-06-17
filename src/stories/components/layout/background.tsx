import styled from 'styled-components';

const LayoutBackground = styled.div.attrs(props => ({ className: 'row' }))`
  position: absolute;
  height: 100%;
  z-index: 0;
  top: 0;

  @media screen and (min-width: 576px) {
    width: calc(50% - 258px);
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - 348px);
  }
  @media screen and (min-width: 992px) {
    width: calc(50% - 468px);
  }
  @media screen and (min-width: 1200px) {
    width: calc(50% - 558px);
  }
  @media screen and (min-width: 1400px) {
    width: calc(50% - 648px);
  }

  background-color: #3c3c3c10;
`;
export { LayoutBackground };
