import { AnimateSharedLayout } from 'framer-motion';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import Provider from './context/Provider';
import { About } from './pages/About';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import TalkToMe from './pages/TalkToMe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <AnimateSharedLayout>
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
          </AnimateSharedLayout>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
