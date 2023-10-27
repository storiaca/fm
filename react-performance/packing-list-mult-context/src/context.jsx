import { createContext, useReducer } from "react";
import { reducer } from "./lib/reducer";
import { getInitialItems } from "./lib/items";

export const ItemsContext = createContext({});
export const ActionsContext = createContext({});


const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());

  return (
    <ActionsContext.Provider value={dispatch}>
      < ItemsContext.Provider value = { items } >
        {children}
      </ItemsContext.Provider>
    </ActionsContext.Provider>
  )
}

export default ItemsProvider;