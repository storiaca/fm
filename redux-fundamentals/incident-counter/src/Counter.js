import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
