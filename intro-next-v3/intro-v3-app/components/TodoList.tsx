import { Key } from 'react';
import Todo from './Todo';
type TodosProps = {
  id: string;
  createdAt: Date;
  content: string;
  completed: boolean;
};

const TodoList = ({ todos }: TodosProps) => {
  return (
    <div>
      {todos.map(
        (todo: {
          id: Key | null | undefined;
          content: string;
          createdAt: Date;
          completed: boolean;
        }) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            createdAt={todo.createdAt}
            completed={todo.completed}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
