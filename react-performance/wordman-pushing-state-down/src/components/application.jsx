import Game from './game';

import ExpensiveComponent from './expensive-component';

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
