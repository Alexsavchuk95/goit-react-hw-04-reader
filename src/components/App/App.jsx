import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader/Reader';
import publications from '../Reader/publications.json';

const App = () => {
  const ReaderContainer = props => <Reader items={publications} {...props} />;
  return (
    <Switch>
      <Route exact path="/reader" component={ReaderContainer} />
      <Route render={() => <Redirect from="/" to="/reader" />} />
    </Switch>
  );
};

export default App;
