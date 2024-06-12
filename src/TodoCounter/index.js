import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}> {completedTodos} de {totalTodos} Proyectos Completados </h2>
  );
}

export { TodoCounter };