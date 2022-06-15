import styled from 'styled-components';

const LayoutBackground = styled.div.attrs(props => ({ className: 'row' }))`
  position: absolute;
  height: 100%;
  width: calc(50% - 648px);
  z-index: 0;
  top: 0;

  @media screen and (max-width: 1400px) {
    width: calc(50% - 558px);
  }
  @media screen and (max-width: 1200px) {
    width: calc(50% - 468px);
  }
  @media screen and (max-width: 992px) {
    width: calc(50% - 348px);
  }
  @media screen and (max-width: 768px) {
    width: calc(50% - 258px);
  }

  background-color: #3c3c3c10;
`;
export { LayoutBackground };
