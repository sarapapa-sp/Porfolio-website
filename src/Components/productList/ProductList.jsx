import "./productList.css";
import Product from "../product/Product";

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="pl-text">
                <h1 className="pl-title">
                    Create & Inspire . It's Lama
                </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque deserunt dolorem earum fugiat illo inventore laudantium, nostrum reiciendis sapiente sint veritatis vero vitae? Cumque esse illum nesciunt possimus sapiente!
                </p>
            </div>
            <div className="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default ProductList;