import { Link } from 'react-router-dom';
import { ProductInfo } from '../../../../shared/StoreObject/ProductInfo';
import './Item.css';
import { IdentityPolicy } from '../../../../shared/StoreEnum/IdentityPolicy';

interface ItemProps {
    product: ProductInfo;
    userIdentity: IdentityPolicy;
}

function Item({ product, userIdentity }: ItemProps) {
    const addItem = (prod: ProductInfo) => async () => {
        const response = await fetch(`/api/basket/add/${prod.supplierId}/${prod.id}`);
        alert(await response.text());
        console.log(product);
    }

    return <div className="item">
        <div className="image-section">
            <Link to="/product" state={{ supplierId: product.supplierId, productId: product.id }}>
                {<img src={product.thumbnail !== undefined ? product.thumbnail : "https://placehold.co/150x150"} alt="product" />}
            </Link>
        </div>
        <div className="details-section">
            <h3 className="item-name">
                <Link to="/product" state={{ supplierId: product.supplierId, productId: product.id }}>
                    {product.name}
                </Link>
            </h3>
            <ul className="additional-details">
                {product.tags.sort((a, b) => a.label.localeCompare(b.label)).map((config, i) => <li key={i}>{`${config.label}: ${config.parameter}`}</li>)}
            </ul>
        </div>
        <div className="store-section">
            <h3 className="store-price">${product.price.toFixed(2)}</h3>
            <div className="store-options">{userIdentity !== IdentityPolicy.AnonymousUser
                ? <span onClick={addItem(product)} className="cart-icon fa fa-cart-plus" />
                : <></>}
            </div>
        </div>
    </div>;
}

export default Item;