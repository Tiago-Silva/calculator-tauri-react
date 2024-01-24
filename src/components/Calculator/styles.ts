import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
  margin: 0;
  top: 0;
  padding: 0;
  left: 0;
  background-color: #000000;
  position: absolute;
`;

export const Result = styled.h1`
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
  font-size:3.5em;
`;

export const ButtonCalc = styled.button<Props>`
  width: 3em;
  height: 3em;
  font-size: 1.5em;
  border: none;
  border-radius: 2em;
  margin: 0.3em;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: blur(1px);
  }
`;