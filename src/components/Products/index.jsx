import Product from "./Product";
import "./style.css"
import SearchIcon from '@material-ui/icons/Search';
const Products = ({ products }) => {
    return (
        <div>
            <div className="searchContainer">
                <form class>
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <button type="submit"><SearchIcon></SearchIcon></button>
                </form>
            </div>
            <div className="product-container">

                {products.map((product) => {
                    return <Product product={product} />
                })}
            </div>
        </div >
    )
}

export default Products
