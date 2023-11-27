type TodosProps = {
  id: string;
  createdAt: Date;
  content: string;
  completed: boolean;
};

const Todo = ({ content, id, createdAt, completed }: TodosProps) => {
  return <div>{content}</div>;
};

export default Todo;
