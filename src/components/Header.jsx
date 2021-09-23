import styled from 'styled-components';

const HeaderContainer = styled.div`
  align-items: center;
  align-content: center;
  background-color: #205527;
  display: flex;
  flex-flow: row nowrap;
  height: 70px;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 90;
`;

const DivSpace = styled.div`
  margin-top: 70px;
`;

function BodyHeader({ children }) {
  return (
    <DivSpace>
      <HeaderContainer>
        <h1>Header</h1>
      </HeaderContainer>
      {children}
    </DivSpace>
  );
}

export default BodyHeader;
