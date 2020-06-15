import styled from 'styled-components';
import {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    background: rgba(0,0,0,0.0)
  }
  100% {
    background: rgba(0,0,0,0.8)
  }
`

export const BlanketWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} .5s forwards;
`;
