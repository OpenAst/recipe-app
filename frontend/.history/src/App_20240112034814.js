import ';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <LoginForm />
        <SignUp />
      </div>
    </Router>
  );
}

export default App;
