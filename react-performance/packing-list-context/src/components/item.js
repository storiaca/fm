import clsx from 'clsx';
import { useState, useContext } from 'react';
import { updateItem } from '../lib/items';
import { remove, update } from '../lib/reducer';
import { ItemsContext } from '../context';

const Item = ({ item }) => {
  const [editing, setEditing] = useState(false);
  const {dispatch} = useContext(ItemsContext)
  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        className="focus:bg-red-500"
        checked={item.packed}
        id={`toggle-${item.id}`}
        onChange={() =>
          dispatch(update({id: item.id, packed: !item.packed }))
        }
      />
      <label
        htmlFor={`toggle-${item.id}`}
        className={clsx({ hidden: editing })}
      >
        {item.name}
      </label>
      <input
        value={item.name}
        id={`edit-${item.id}`}
        className={clsx('py-0 text-sm', { hidden: !editing })}
        onChange={(event) =>
          dispatch(update(item.id, { name: event.target.value }))
        }
      />
      <div className="flex gap-2">
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Edit "${item.name}"`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? '💾 Save' : '✍️ Edit'}
        </button>
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Remove "${item.name}"`}
          onClick={() => dispatch(remove(item.id))}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
