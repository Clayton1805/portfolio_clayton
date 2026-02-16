import { AnimateSharedLayout } from 'framer-motion';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Provider from './context/Provider';
import { About } from './pages/About';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import TalkToMe from './pages/TalkToMe';

const theme = {
  colors: {
    text: '#616161',
    title: '#4C4C4C',
  },
};

const BodyCss = styled.div`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(248, 249, 250);
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: #616161;
  h1, h2, h3, h4, h5, label {
    color: #4C4C4C;
    margin: 5px 0px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <ThemeProvider theme={theme}>
          <AnimateSharedLayout>
            <BodyCss>
              <Switch>
                <Route exact path="/apresentacao" component={About} />
                <Route exact path={['/portfolio', '/portfolio/:id']} component={Portfolio} />
                <Route exact path="/faleComigo" component={TalkToMe} />
                <Route exact path="/easter_egg">
                  <NotFound />
                  {// foto do clayton sendo uma navinha em que você destruir os bugs que
                // vem da direita com tiros no final você enfrenta o chefe
                }
                </Route>
                <Route exact path="/" component={() => <Redirect to="/apresentacao" />} />
                <Route component={NotFound} />
              </Switch>
            </BodyCss>
          </AnimateSharedLayout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
