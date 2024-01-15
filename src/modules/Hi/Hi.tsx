import React from 'react';
import { Button, Container, Title } from '../../shared/base.style';
import styled from 'styled-components';
import frontend_img from '../../images/frontend_image.png';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { colors } from '../../shared/enums';

const HiEl = styled.div`
  padding-top: 60px;
  background: ${colors.black_linear};
`;

const HiContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 150px;
  align-items: center;
  position: relative;
`;
const HiImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50% 50% 10px 10px;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 100vw;

  @media (max-width: 996px) {
    opacity: 0.5;
  }
`;
const HiContent = styled.div`
  max-width: 490px;
  position: relative;
  z-index: 10;
`;
const HiTitle = styled(Title)`
  
`;
const HiBtnList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const HiBtn = styled(Button)``;
export const Hi = () => {
  return (
    <HiEl>
      <HiContainer>
        <HiContent>
          <HiTitle>привет, я - frontend developer</HiTitle>
          <HiTitle>Я создаю красивые и адаптивные сайты</HiTitle>
          <HiBtnList>
            <NavLink to={routes.portfolio}>
              <HiBtn>
                <div className="wave"></div>
                <span>Портфолио</span>
              </HiBtn>
            </NavLink>
            <HiBtn>
              <div className="wave"></div>
              <span>
                <a href="https://t.me/AkhmedFr">telegram</a>
              </span>
            </HiBtn>
          </HiBtnList>
        </HiContent>
        <HiImg src={frontend_img} />
      </HiContainer>
    </HiEl>
  );
};
