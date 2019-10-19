import styled from 'styled-components';

const Footer = ({ children, title = 'This is the default navigation' }) => (
  <StyledDiv>I am the footer component</StyledDiv>
)

const StyledDiv = styled.div`
  color: red;
`;

export default Footer