import React from 'react';
import path from 'constants/path';
import * as S from './styles';


const TopBar: React.FC = () => (
    <S.Container>
        <img src={path.images.LOGO} alt="" />
    </S.Container>
  )

export default TopBar;