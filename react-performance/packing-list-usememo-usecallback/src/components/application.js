import { useState, useCallback } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const [items, setItems] = useState(() => getInitialItems());

  // const [nothing, setNothing] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNothing(false);
  //     console.log("I am setting stuff");
  //   }, 1000)
  // }, [])

  const add = useCallback((name) => {
    const item = createItem(name);
    setItems([...items, item]);
  }, [items]);

  const update = useCallback((id, updates) => {
    setItems(updateItem(items, id, updates));
  }, [items]);

  const remove = useCallback((id) => {
    setItems(removeItem(items, id));
  }, [items]);

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const markAllAsUnpacked = useCallback(() => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  }, [items]);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          update={update}
          remove={remove}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          update={update}
          remove={remove}
        />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
