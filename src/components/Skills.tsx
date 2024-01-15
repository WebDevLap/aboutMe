import React from 'react';
import styled from 'styled-components';

import html_img from '../images/skills/html.svg';
import css_img from '../images/skills/css.svg';
import scss_img from '../images/skills/scss.svg';
import js_img from '../images/skills/js.svg';
import react_img from '../images/skills/react.svg';
import redux_img from '../images/skills/redux.svg';
import ts_img from '../images/skills/ts.svg';
import sb_img from '../images/skills/sb.svg';
import git_img from '../images/skills/git.svg';

import { colors } from '../shared/enums';
import { Container, Title } from '../shared/base.style';

const SkillsEl = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;
const SkillsContainer = styled(Container)``;
const SkillsList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
const SkillsItem = styled.div`
  padding: 50px;
  border-radius: 20px;
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.black};
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.47);

  &:hover{
    transform: scale(0.9);
    cursor: pointer;
  }
`;
const SkillsItemImg = styled.img`
  margin-bottom: 33px;
  width: 75px;
  height: 75px;
`;
const SkillsItemTitle = styled.div`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 300;
`;

interface ISkill {
  title: string;
  img: string;
}

const skill_elements: ISkill[] = [
  {
    title: 'HTML',
    img: html_img,
  },
  {
    title: 'CSS',
    img: css_img,
  },
  {
    title: 'SCSS',
    img: scss_img,
  },
  {
    title: 'JavaScript',
    img: js_img,
  },
  {
    title: 'React',
    img: react_img,
  },
  {
    title: 'Redux',
    img: redux_img,
  },
  {
    title: 'TypeScript',
    img: ts_img,
  },
  {
    title: 'StoryBook',
    img: sb_img,
  },
  {
    title: 'Git/GitHub',
    img: git_img,
  },
];

export const Skills = () => {
  return (
    <SkillsEl>
      <SkillsContainer>
        <Title>Мои Навыки: </Title>
        <SkillsList>
          {skill_elements.map((el, index) => {
            return (
              <SkillsItem key={index}>
                <SkillsItemImg src={el.img} />
                <SkillsItemTitle>{el.title}</SkillsItemTitle>
              </SkillsItem>
            );
          })}
        </SkillsList>
      </SkillsContainer>
    </SkillsEl>
  );
};
