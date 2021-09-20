import React from 'react';
import TopBar from 'components/TopBar';
import Form from 'components/Form';
import * as S from './styles';

const Home: React.FC = () => (
  <S.Container>
    <TopBar/>
    <S.Content>
      <Form/>
    </S.Content>
  </S.Container>
)


export default Home;