import styled, { css } from 'styled-components';
import { colors } from './enums';

export const Container = styled.div<{ indent?: boolean }>`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  ${(el) =>
    !el.indent &&
    css`
      padding: 0;
    `}
`;

export const Button = styled.button`
  font-size: 24px;
  font-weight: 800;
  color: ${colors.white};
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 20px 30px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .wave {
    top: -150px;
  }

  & span {
    position: relative;

    a{
      color: inherit;
    }
  }

  & .wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 250px;
    height: 250px;
    background: linear-gradient(45deg, #4f00bc, #29abe2);
    transition: 0.5s ease;
  }

  & .wave:after,
  & .wave:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  & .wave:after {
    border-radius: 40%;
    background: rgba(51, 51, 51, 0.5);
    animation: wave 7s linear infinite;
  }

  & .wave:before {
    border-radius: 45%;
    background: #333333;
    animation: wave 12s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    0% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;


export const Title = styled.h2`
font-size: 35px;
  line-height: 1.2;
  margin-bottom: 27px;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: 800;
`