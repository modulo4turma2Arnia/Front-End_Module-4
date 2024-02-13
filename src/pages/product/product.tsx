import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"
import { Cards } from "../../components/ui/card/Card"

export const Product: React.FC = () => {
    const { selectedProduct } = useContext(ProductContext)
    return(
        <div>
            <h1>Resgate Produtos</h1>
            {selectedProduct && 
                <Cards product={selectedProduct} 
            />}
        </div>
    )
}