import { React } from 'react';
import { Button, Image } from 'react-bootstrap';
import './style.css';

const Item = ({
    basket,
    product,
    updateProduct,
    RemoveItemFromBasket,
    products,
}) => {

    function category() {
        if (product.length == 0)
            categoryName = "Kategoria";
        else {
            var categoryName;
            for (var i = 0; i < 25; i++) {
                if (product.product_id == products[i].id)
                    categoryName = products[i].categories[0].name
            }
        }
        return categoryName;
    }
    //{ console.log("produkt:", product.id) }
    //{ console.log("produktsItem:", products) }
    return (
        < div className="row my-4" >
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-auto">
                        <Image src={product.media.source} className="cartItemImage" rounded />
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                        <p className="cartItemTitle">{product.name}</p>
                        <p className="cartItemPlatform font-weight-light">{category()}</p>
                        <Button variant="outline-danger" size="sm" className="text-uppercase mt-auto" onClick={() => { RemoveItemFromBasket(product.id); }}>
                            Usuń
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-auto mt-3 mt-md-0 col-md-2 d-flex justify-content-center">
                {basket && (
                    <>
                        <Button
                            size="small"
                            color="secondary"
                            variant="outlined"
                            onClick={() => {
                                RemoveItemFromBasket(product.id);
                            }}
                        >
                        </Button>
                        <>
                            <Button
                                size="small"
                                variant="outlined"
                                className="increase-product-quantity"
                                onClick={() => {
                                    updateProduct(product.id, product.quantity + 1);
                                }}
                            >
                                +
                </Button>
                            <p className="quantity">&nbsp;{product.quantity}&nbsp;</p>
                            <Button
                                size="small"
                                color="secondary"
                                variant="outlined"
                                className="increase-product-quantity"
                                onClick={() => {
                                    updateProduct(product.id, product.quantity - 1);
                                }}
                            >
                                -
                </Button>
                        </>
                    </>
                )}
            </div>
            <div className="col col-md-2 mt-2 mt-md-0 text-center text-pixprimary">
                {product.price.formatted} ZŁ
            </div>
            <div className="col col-md-2 mt-2 mt-md-0 text-center text-pixprimary">
                {product.price.raw * product.quantity} ZŁ
            </div>
        </div >
    );
}


export default Item;