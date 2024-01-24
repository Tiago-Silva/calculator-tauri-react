import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  height: 90vh;
  margin: 0;
  top: 10px;
  padding: 0;
  left: 0;
  background-color: #2d2a37;
  position: absolute;
`;

export const Result = styled.h1`
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
  font-size:3.5em;
`;

export const Teclado = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0; 
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
`;

export const ButtonCalc = styled.button<Props>`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
  transition: filter 0.3s ease;

  border-radius: 999px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), ${(props) => props.color};
  box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset, 0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 4px 0px rgba(0, 0, 0, 0.26), 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 7px 7px 0px rgba(0, 0, 0, 0.04), 0px 11px 7px 0px rgba(0, 0, 0, 0.01);

  &:hover {
    filter: blur(1px);
  }
`;