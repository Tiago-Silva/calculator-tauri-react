
import { styled } from 'styled-components';
import { VscClose, VscDash } from "react-icons/vsc";

export const Container = styled.div`
  height: 30px;
  background: #2d2a37;
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-radius: 10px;
  border-top: 2px solid aqua;
`;

export const WrapperBasicIcons = styled.div`
  display: flex;
  padding: 5px;
  gap: 5px;
  /* justify-content: flex-end; */
`;

export const TitlebarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 989px;
  
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #462878;
  box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset, 0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 4px 0px rgba(0, 0, 0, 0.26), 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 7px 7px 0px rgba(0, 0, 0, 0.04), 0px 11px 7px 0px rgba(0, 0, 0, 0.01);

  transition: filter 0.3s ease;
  
  &:hover {
    background: #3c414a;
    filter: blur(1px);
  }
`;

export const Minimize = styled(VscDash)`
  color: white;
`;

export const Close = styled(VscClose)`
  color: white;
`;