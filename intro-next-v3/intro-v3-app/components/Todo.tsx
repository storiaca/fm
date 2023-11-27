'use client';

import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

type TodosProps = {
  id: string;
  createdAt: Date;
  content: string;
  completed: boolean;
};

const Todo = ({ content, id, createdAt, completed }: TodosProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-balck/20 cursor-pointer ${
        completed ? 'line-through text-gray-500' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(id))}
    >
      {content}
    </div>
  );
};

export default Todo;
