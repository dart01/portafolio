import styled, { keyframes } from "styled-components";

// Animaciones
const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const floatCircle = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-25px) scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
`;

// Contenedor principal
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg,rgba(44, 33, 58, 0.88),rgba(18, 18, 18, 0.12));
  z-index: 0;
`;

// Triángulos
const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid rgba(255, 255, 255, 0.83);
  animation: ${float} 10s infinite ease-in-out;

  &:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-duration: 8s;
  }
  &:nth-child(2) {
    top: 30%;
    left: 50%;
    animation-duration: 12s;
  }
  &:nth-child(3) {
    top: 50%;
    left: 80%;
    animation-duration: 10s;
  }
  &:nth-child(4) {
    top: 70%;
    left: 10%;
    animation-duration: 14s;
  }
  &:nth-child(5) {
    top: 90%;
    left: 60%;
    animation-duration: 9s;
  }
`;

// Círculos
const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(64, 240, 210, 0.96);
  animation: ${floatCircle} 8s infinite ease-in-out;

  &:nth-child(6) {
    top: 15%;
    left: 80%;
    width: 30px;
    height: 30px;
    animation-duration: 10s;
  }
  &:nth-child(7) {
    top: 40%;
    left: 30%;
    width: 40px;
    height: 40px;
    animation-duration: 12s;
  }
  &:nth-child(8) {
    top: 65%;
    left: 70%;
    width: 25px;
    height: 25px;
    animation-duration: 9s;
  }
  &:nth-child(9) {
    top: 85%;
    left: 20%;
    width: 35px;
    height: 35px;
    animation-duration: 11s;
  }
  &:nth-child(10) {
    top: 20%;
    left: 45%;
    width: 50px;
    height: 50px;
    animation-duration: 15s;
  }
`;

const FloatingFiguresBackground = () => {
  return (
    <Container>
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Container>
  );
};

export default FloatingFiguresBackground;