import * as React from "react";
import { ContextProps } from "../types/contextProps/ContextProps";

const defaultContext: ContextProps = {
    selectProduct: null,
    setSelectProduct: () => {},
}

export const ProductContext = React.createContext<ContextProps>(defaultContext)