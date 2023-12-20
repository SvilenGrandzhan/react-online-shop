import { createContext } from "react";

export const ShoppingCardContext = createContext({ items: [], addItemToCard: () => {} });
