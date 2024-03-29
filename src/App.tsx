import styled, { createGlobalStyle, css } from 'styled-components';
import { Header } from './modules/Header/Header';
import { Main } from './pages/Main/Main';
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import { colors } from './shared/enums';
import { Footer } from './modules/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  /*Обнуление*/
//
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
* {
  -webkit-tap-highlight-color: transparent;
  transition: 0.3s;
}
a{
  color: inherit;
}
/*--------------------*/
body{
  font-family: Montserrat;
  font-weight: 500;
  background: ${colors.grey};
  color: ${colors.white};
}
`;

const AppEl = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppGrowing = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <AppEl>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />} />
      </Routes>
      <AppGrowing />
      <Footer />
    </AppEl>
  );
}

export default App;
