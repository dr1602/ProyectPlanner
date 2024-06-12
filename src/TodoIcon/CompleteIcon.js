import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#3BBB32' : 'white'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
