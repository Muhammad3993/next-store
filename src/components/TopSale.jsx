import Slider from "react-slick";
import Title from "./Title";
import { Link } from "react-router-dom";

import { BsCart4 } from "react-icons/bs"
import { HiOutlineHeart } from "react-icons/hi"

const TopSale = ({ data }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <Title title={data.title} />
            <div className="container topsale">
                <Slider {...settings}>
                    {
                        data.products.length === 0 ?
                            <h1>No products</h1> :
                            data.products.map(product => (
                                <div key={product.id}>
                                    <div className="catalog_product catalog_product_indiv">
                                        <div className="catalog_product_img">
                                            <img src={product.variants[0].img} alt="" />
                                        </div>
                                        <div className="catalog_product_price">
                                            {
                                                product.variants[0].modifications[0].price === product.variants[0].modifications[0].price_old ?
                                                    <b>$ {product.variants[0].modifications[0].price}</b> :
                                                    <><b>$ {product.variants[0].modifications[0].price}</b> - <del>$ {product.variants[0].modifications[0].price_old}</del></>
                                            }
                                        </div>
                                        <div className="catalog_product_name">
                                            {product.name}
                                        </div>
                                        <div className="catalog_product_quantity">
                                            {product.variants[0].modifications[0].quantity} ta mavjud
                                        </div>
                                        <div className="catalog_actions">
                                            <Link to={`/products/${product.id}`} className="catalog_product_btn">
                                                Sotib olish
                                            </Link>
                                            <span><BsCart4 /></span>
                                        </div>
                                        <div className="catalog_product_like_btn">
                                            <HiOutlineHeart />
                                        </div>
                                        <div className="catalog_product_tags">
                                            {
                                                product.hasOwnProperty('tags') && product.tags.map(tag => (
                                                    <Link key={tag.id} to={`/tags/${tag.id}`} className={tag.name === 'New' ? "catalog_product_tag new" : "catalog_product_tag"}>
                                                        {tag.name}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default TopSale;