import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import map from 'lodash/map';

import Topbar from "./components/topbar/Topbar";

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Single = lazy(() => import('./pages/single/Single'));
const Write = lazy(() => import('./pages/write/Write'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function App() {
  return (
    <Router>
      <Topbar />
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
