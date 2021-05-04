import styled from 'styled-components';

const centerAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`;

export const AppWrapper = styled(centerAlign)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

export const ActivityWrapper = styled(centerAlign)`
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const DropdownWrapper = styled(centerAlign)`
  flex-direction: column;
  font-size: 1.5rem;
  background-color: rgb(252, 152, 3);
  height: 50vh;
  padding: 0px 20px;
  color: #000;
  border: 4px solid black;
  border-radius: 10px;
  width: 350px;

  @media screen and (max-width: 1200px) {
    margin: 10px 0px;
  }
`;

export const ButtonWrapper = styled.button`
  font-size: 1.5rem;
  padding: 5px;
  margin: 20px;
  width: 150px;
  cursor: pointer;
  background-color: rgb(161, 191, 165);
  border: 4px solid rgb(161, 191, 165);
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: rgb(0, 209, 28);
    border: 4px solid rgb(0, 209, 28);
  }
`;
