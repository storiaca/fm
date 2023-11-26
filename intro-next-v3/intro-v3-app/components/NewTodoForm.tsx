'use client';
import { useState } from 'react';

const NewTodoForm = () => {
  const [state, setState] = useState('');
  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewTodoForm;
