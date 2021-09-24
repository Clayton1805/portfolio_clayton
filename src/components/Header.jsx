import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const heightPx = 70;
const borderPx = 2;

const HeaderContainerCss = styled.div`
  height: ${heightPx}px;
  border-bottom: ${borderPx}px solid black;
  align-items: center;
  align-content: center;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 90;
`;

const DivSpaceCss = styled.div`
  margin-top: ${heightPx + borderPx}px;
`;

function BodyHeader({ children }) {
  const history = useHistory();
  return (
    <DivSpaceCss>
      <HeaderContainerCss>
        <div />
        <div>
          <button onClick={() => history.push('/apresentacao')} type="button">Apresentação</button>
          <button onClick={() => history.push('/portfolio')} type="button">portfolio</button>
          <button type="button">Fale comigo</button>
        </div>
      </HeaderContainerCss>
      {children}
    </DivSpaceCss>
  );
}

export default BodyHeader;
