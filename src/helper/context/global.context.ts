import {createContext} from "react";

export interface GlobalContextInterface {
    stars: number;
}
export const GlobalContext = createContext<GlobalContextInterface>({
    stars: 0
});