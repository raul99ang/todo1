import { useState, useRef } from 'react';
import { add, divide, multiply, subtract } from './utils/math';
import Todo from './components/List';

function App() {
   return (
    <div className="container">
    <Todo />
  </div>
   )
}
export default App;
