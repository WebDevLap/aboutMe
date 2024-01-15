import React from 'react';
import styled from 'styled-components';
import { colors } from '../../shared/enums';
import { Hi } from '../../modules/Hi/Hi';
import { Skills } from '../../components/Skills';


const MainEl = styled.div`
`;

export const Main = () => {
  return (
    <MainEl>
      <Hi/>
      <Skills/>
    </MainEl>
  );
};
