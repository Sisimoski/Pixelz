import Product from "./Product";
import "./style.css"
const Products = ({ products }) => {
    return (
        <div>
            <div className="product-container">
                {products.map((product) => {
                    return <Product product={product} />
                })}
            </div>
        </div >
    )
}

export default Products
