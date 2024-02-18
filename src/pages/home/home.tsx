import * as C from "./style/style";
import { Gamification } from "../../components/ui/gamification/Gamification";
import { Header } from "../../components/ui/header/Header";
import { ProductsComponent } from "../../components/ui/products/ProductsComponent";

export const Home: React.FC = () => {
    return (
        <>
        <C.ContainerHome>
            <Header textColor="white" />
            <C.BoxHome>
            <Gamification />
            </C.BoxHome>
        </C.ContainerHome>
        <ProductsComponent isToShow={true} />
        </>
    )
}