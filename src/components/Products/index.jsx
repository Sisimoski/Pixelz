import Product from "./Product";
import ikonax from "../../media/xboxb.png";
import ikonaps from "../../media/psb.png";
import ikonapc from "../../media/pcb.png";
import ikonans from "../../media/nsb.png";
import ikonaall from "../../media/infinity.png";
import { Container } from "@material-ui/core";
import "./style.css"
import './filters.css'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";

const Products = ({ categories, addProduct }) => {
    const [title, setTitle] = useState("all");
    const [name, setName] = useState('')
    console.log("nazwa: ", name);
    return (
        <div>

            <Container id="products">
            </Container>
            <div className="napis">
                WYBIERZ PLATFORMĘ
                <p className="tekst">Wybierz swoją ulubioną grę na swoją ulubioną platformę</p>
            </div>
            <div className="filters">

                <div class="hexagon-wrapper" onClick={() => setTitle("xbox")}>
                    <div class="hexagon">
                        <i><img src={ikonax} /><p className="podtekst">XBOX</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper" onClick={() => setTitle("playstation")}>
                    <div class="hexagon">
                        <i><img src={ikonaps} /><p className="podtekst">PLAYSTATION</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper" onClick={() => setTitle("all")}>
                    <div class="hexagon">
                        <i><img src={ikonaall} /><p className="podtekst">WSZYSTKIE</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper" onClick={() => setTitle("pc")}>
                    <div class="hexagon">
                        <i><img src={ikonapc} /><p className="podtekst">PC</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper" onClick={() => setTitle("nintendo")}>
                    <div class="hexagon">
                        <i><img src={ikonans} /><p className="podtekst">NINTENDO</p></i>
                    </div>
                </div>
            </div>

            <div className="searchContainer">
                <form class>
                    <input type="search" placeholder="Search" aria-label="Search" onChange={event => setName(event.target.value)} />
                    <button ><SearchIcon /></button>
                </form>
            </div>

            {console.log(categories)}

            <div className="product-container">
                {categories.map((category) => {
                    if (name == '') {
                        if (title == "all") {
                            { console.log(category) }
                            return (
                                <>
                                    {
                                        category.productsData.map((product) => {
                                            return <Product product={product} addProduct={addProduct} />
                                        })
                                    }
                                </>
                            )
                        } else if (title == "xbox") {
                            { console.log(category) }
                            if (category.slug == 'xbox') {
                                return (
                                    <>
                                        {
                                            category.productsData.map((product) => {
                                                return <Product product={product} addProduct={addProduct} />
                                            })
                                        }
                                    </>
                                )
                            }
                        }
                        else if (title == "playstation") {
                            { console.log(category) }
                            if (category.slug == 'ps4') {
                                return (
                                    <>
                                        {
                                            category.productsData.map((product) => {
                                                return <Product product={product} addProduct={addProduct} />
                                            })
                                        }
                                    </>
                                )
                            }
                        }
                        else if (title == "nintendo") {
                            { console.log(category) }
                            if (category.slug == 'nintendo') {
                                return (
                                    <>
                                        {
                                            category.productsData.map((product) => {
                                                return <Product product={product} addProduct={addProduct} />
                                            })
                                        }
                                    </>
                                )
                            }
                        }
                        else if (title == "pc") {
                            { console.log(category) }
                            if (category.slug == 'pc') {
                                return (
                                    <>
                                        {
                                            category.productsData.map((product) => {
                                                return <Product product={product} addProduct={addProduct} />
                                            })
                                        }
                                    </>
                                )
                            }
                        }
                    }
                    else {

                        for (var i = 0; i <= 100; i++)
                            for (var k = 0; k <= 10; k++)
                                if (typeof category.productsData[k] !== "undefined" && category.productsData[k].name.charAt(0).toUpperCase() == name.charAt(0).toUpperCase()) {
                                    { console.log("productsdata: ", category.productsData[i].name.charAt(i)) }
                                    return (
                                        <>
                                            {
                                                category.productsData.map((product) => {
                                                    //{ console.log("produkt: ", product) }
                                                    if (product.name.charAt(i).toUpperCase() == name.charAt(i).toUpperCase())
                                                        return <Product product={product} addProduct={addProduct} />

                                                })

                                            }
                                        </>
                                    )
                                }


                    }
                })}

            </div>

        </div >
    )
}

export default Products
