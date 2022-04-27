import './App.css';
import AppRouter from './components/AppRouter';
import { GlobalStyle } from './components/GlobalSyle';
import styled, {ThemeProvider} from 'styled-components';
import {temaClaro, temaEscuro} from './components/UI/temas';
import { useState } from 'react';

const Body = styled.div`
  padding-right: 3rem;
  padding-left: 3rem;
  height: 100vh;

  @media (max-width: 400px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

function App() {

  const [tema, setTema] = useState(true);

  function mudarThema() {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro }>
      <GlobalStyle theme={tema ? temaEscuro : temaClaro }/>
      <Body>
        <AppRouter mudarThema={mudarThema} tema={tema}/>
      </Body>
    </ThemeProvider>
  );
}

export default App;
