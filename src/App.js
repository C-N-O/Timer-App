import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Activity from './components/Activity';
import Timer from './components/Timer';
import { AppWrapper } from './styles';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path='/' exact component={Activity} />
          <Route path='/timer' exact component={Timer} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
