import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/base.style';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const FooterEl = styled.div``;
const FooterContainer = styled(Container)`
  display: flex;
  gap: 100px;
  font-size: 18px;
  padding: 100px 50px 100px 50px;
`;
const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const FooterListItem = styled.div`
  cursor: pointer;
  color: inherit;
`;
const FooterOthers = styled.div``;

export const Footer = () => {
  return (
    <FooterEl>
      <FooterContainer>
        <FooterList>
          <NavLink to={routes.main}>
            <FooterListItem>Home</FooterListItem>
          </NavLink>
          {/* <NavLink to={routes.about}> */}
          <FooterListItem>About me</FooterListItem>
          {/* </NavLink> */}
          <NavLink to={routes.portfolio}>
            <FooterListItem>Portfolio</FooterListItem>
          </NavLink>
          <FooterListItem>Contact</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Contact:</FooterListItem>
          <FooterListItem>Telegram: @AkhmedFr</FooterListItem>
          <FooterListItem>Email: akhmed.x051@gmail.com</FooterListItem>
          <FooterListItem>Calls: +7(965)-450-19-93</FooterListItem>
        </FooterList>
        <FooterOthers></FooterOthers>
      </FooterContainer>
    </FooterEl>
  );
};
