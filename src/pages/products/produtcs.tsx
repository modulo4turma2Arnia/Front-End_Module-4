import * as C from "./style/style";
import { Header } from "../../components/ui/header/Header";
import { ProductsComponent } from "../../components/ui/products/products";

export const Products: React.FC = () => {
  return (
    <C.Container>
      <Header textColor="#502B6B" />
      <C.PageContent>
        <ProductsComponent isToShow={false} />
      </C.PageContent>
    </C.Container>
  );
};
