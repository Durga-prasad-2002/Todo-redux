import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodos';
import DisplayCount from './components/DisplayCount';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container className='py-3'>
      <AddTodo/>
      <DisplayCount/>
      <DisplayTodos/>
    </Container>
    </Provider>
  );
}

export default App;
