import logo from './logo.svg';
import './App.css';
import { ROUTES } from './Router/Routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return useRoutes(
    ROUTES
  );
}

export default App;
