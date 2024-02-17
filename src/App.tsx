import React from "react";
import GlobalStyle from "./assets/styles/globalstyle";
import { Router } from "./config/router";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [selectProduct, setSelectProduct] = React.useState(null)

  return (
    <ProductContext.Provider value={{selectProduct, setSelectProduct}}>
      <GlobalStyle />
      <Router />
    </ProductContext.Provider>
  )
}
export default App
