import * as React from "react";
import { ContextProps } from "../types/contextProps/ContextProps";

export const ProductContext = React.createContext<ContextProps | null>(null)