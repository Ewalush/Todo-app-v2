import Navbar from './components/navBar';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom'
import TodoForm from './components/todoForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/todoForm/new' element={<TodoForm />} />
        <Route path='/todoForm/:id' element={<TodoForm />} />
      </Routes>
    </>
  );
}

export default App;
