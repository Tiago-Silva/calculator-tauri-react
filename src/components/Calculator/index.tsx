import React, { useState } from 'react';

// import Container from "@mui/material/Container";
// import { Box } from "@mui/system";
import {
  Result, 
  ButtonCalc,
  Container,
  Teclado,
  WrapperButton
} from './styles';

export const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState('');
  const buttonCentralColor = '#2D2A37';
  const topButtonColor = '#007bff';
  const rightButtonColor = '#462878';

  const inputNum: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    var input = e.currentTarget.value;
    if (typeof num === 'number') {
      setNum(Number(num + input)); // Convertendo para número antes de somar
    } else {
      setNum(parseFloat(input));
    }
  }

  const clear = () => {
    setNum(0);
  }

  const porcentage = () => {
    setNum(num / 100);
  }

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  const operatorHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const operatorInput = e.currentTarget.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  const calculate = () => {
    if (operator === "/") {
      setNum(oldnum / num);
    } else if (operator === "X") {
      setNum(oldnum * num);
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(oldnum - num);
    } else if (operator === "+") {
      setNum(oldnum + num);
    }
  }

  return (
    <Container>
      <Result>{num}</Result>
      <Teclado>
        <WrapperButton>
          <ButtonCalc color={topButtonColor} onClick={clear}>AC</ButtonCalc>
          <ButtonCalc color={topButtonColor} onClick={changeSign}>+/-</ButtonCalc>
          <ButtonCalc color={topButtonColor} onClick={porcentage}>%</ButtonCalc>
          <ButtonCalc color={rightButtonColor} onClick={operatorHandler} value="/">
            /
          </ButtonCalc>
        </WrapperButton>

        <WrapperButton>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={7}>
            7
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={8}>
            8
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={9}>
            9
          </ButtonCalc>
          <ButtonCalc color={rightButtonColor} onClick={operatorHandler} value="X">
            X
          </ButtonCalc>
        </WrapperButton>

        <WrapperButton>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={4}>
            4
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={5}>
            5
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={6}>
            6
          </ButtonCalc>
          <ButtonCalc color={rightButtonColor} onClick={operatorHandler} value="-">
            -
          </ButtonCalc>
        </WrapperButton>

        <WrapperButton>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={1}>
            1
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={2}>
            2
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={3}>
            3
          </ButtonCalc>
          <ButtonCalc color={rightButtonColor} onClick={operatorHandler} value="+">
            +
          </ButtonCalc>
        </WrapperButton>

        <WrapperButton>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={0}>
            0
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} onClick={inputNum} value={"."}>
            ,
          </ButtonCalc>
          <ButtonCalc color={buttonCentralColor} style={{ visibility: "hidden" }}>
            ,
          </ButtonCalc>
          <ButtonCalc color={rightButtonColor} onClick={calculate}>
            =
          </ButtonCalc>
        </WrapperButton>
        
      </Teclado>
    </Container>
  );
}

