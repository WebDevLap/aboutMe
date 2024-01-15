import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/base.style';
import logo_img from '../../images/logo.svg';
import { colors } from '../../shared/enums';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const HeaderEl = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderContainer = styled(Container)`
  min-height: 50px;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(NavLink).attrs({
  translate: 'no',
  to: routes.main,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  color: ${colors.white};
  padding: 3px;

  &:hover {
    border-radius: 3px;
    background-color: rgba(148, 147, 146, 0.5);
  }
`;

const LogoImg = styled.img`
  width: 40px;
`;
const LogoText = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

export const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <HeaderLogo to={routes.main}>
          <LogoImg src={logo_img} />
          <LogoText>About Me</LogoText>
        </HeaderLogo>
      </HeaderContainer>
    </HeaderEl>
  );
};
