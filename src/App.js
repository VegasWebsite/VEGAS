
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './UserRouter';

function App() {
  return (
    <BrowserRouter>
      <UserRouter/>
    </BrowserRouter>
  );
}

export default App;
