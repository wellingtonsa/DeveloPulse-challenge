import React from 'react';
import GlobalStyle from 'common/styled/global';
import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;