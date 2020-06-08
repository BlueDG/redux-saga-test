import styled from 'styled-components';

export const BackgroundOn = styled.div`
  background: repeating-linear-gradient(
    0deg,
    #50673b,
    #50673b 3px,
    #5d7744 3px,
    #5d7744 6px
  );
  min-height: 100vh;
  min-width: 100vh;
`;

export const BackgroundOff = styled.div`
  background: repeating-linear-gradient(
    0deg,
    #393e58,
    #393e58 3px,
    #3b435c 3px,
    #3b435c 6px
  );
  min-height: 100vh;
  min-width: 100vh;
`;

export const Main = styled.div`
  text-align: center;
`;

export const ButtonOff = styled.button`
  outline: none;
  border: 4px solid #d0eaf7;
  color: #d0eaf7;
  text-shadow: 2px 2px grey;
  margin: 2%;
  padding: 10px;
  background: black;
  cursor: pointer;
`;

export const ButtonOn = styled.button`
  outline: none;
  border: 4px solid #d1deab;
  margin: 2%;
  padding: 10px;
  background: #1e261b;
  cursor: pointer;
`;
