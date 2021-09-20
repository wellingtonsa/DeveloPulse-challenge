import React from 'react';
import path from 'constants/path';
import * as S from './styles';

export interface INotification {
    type: 'success' | 'error',
    message: string
}

type Props = INotification;

function Notification({ type, message }:Props): React.ReactElement {
    return(
    <S.Container type={type}>
        <img src={path.icons[type]} alt="" />
        {message}
  </S.Container>)
  }

export default Notification;