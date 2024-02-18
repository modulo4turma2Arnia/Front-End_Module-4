import * as C from "./style/style";
import * as React from "react";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { GetDataCards } from "../../../requests/products";
import { Spinner } from "../spinner/Spinner";
import { ErrorComponent } from "../error/ErrorComponent";
import { ImageHero } from "../imageHeros/ImageHeros";
import { Link } from "react-router-dom";
import { Cards } from "../card/Card";
import { CardProps } from "../../../types/cardProps/CardProps";
import { ProductsProps } from "../../../types/productsProps/ProductProps";

export const ProductsComponent: React.FC<ProductsProps> = ({ isToShow }) => {
    const [products, setProducts] = React.useState<Array<CardProps>>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [price] = React.useState("");
    const ref = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = React.useState(false);

    useOutsideClick(
        ref,
        () => setClicked(false),
        () => setClicked(true)
    );

    React.useEffect(() => {
        const fetchProducts = async () => {
        try {
            const isPrice = !isNaN(Number(searchTerm));
            const name = isPrice ? "" : searchTerm;
            const price = isPrice ? searchTerm : "";
            const data = await GetDataCards(name, price);
            setProducts(data);
        } catch (err) {
            if (err instanceof Error) {
            console.log(err.message);
            setError(err.message);
            }
        } finally {
            setTimeout(() => {
            setLoading(false);
            }, 2000);
        }
        };
        fetchProducts();
    }, [searchTerm, price]);

    if (loading) return <Spinner />;
    if (error) return <ErrorComponent />;

return (
    <C.Container>
    <C.FieldSearch>
        <C.SearchBox
        clicked={clicked}
        onClick={(event: MouseEvent) => {
            event.stopPropagation();
            setClicked(true);
        }}
        >
        <C.IconWithMargin size={30} />
        <C.Search
            placeholder="O que você esta buscando? "
            type="text"
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
        />
        </C.SearchBox>
    </C.FieldSearch>
    {isToShow && (
        <C.ContainerHero>
        <C.FieldImageHero>
            <ImageHero />
        </C.FieldImageHero>
        </C.ContainerHero>
    )}
    <C.FieldTitle>
        <C.HeadingThree>Produtos para você</C.HeadingThree>
    </C.FieldTitle>
        <C.ContainerCards>
            {products.map((product) => (
            <Link to={`/product/${product.id}`} className="noUnderline">
                <Cards key={product.id} product={product} isActive={true} />
            </Link>
            ))}
        </C.ContainerCards>
        </C.Container>
        )
}