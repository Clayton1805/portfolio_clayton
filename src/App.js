import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/sobre" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/easter_egg">
            <NotFound />
            {// foto do clayton sendo uma navinha em que você destruir os bugs que
            // vem da direita com tiros no final você enfrenta o chefe
            }
          </Route>
          <Route exact path="/" component={() => <Redirect to="/sobre" />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
