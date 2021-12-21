import ProducImage from '../assets/product/blackT.png';

const ProductItem=()=>{
    return(
        <div className="item">
        <img src={ProducImage} alt="" width="auto" height="40px" />
        <div>
            <p>Adidas Yeezy</p>
            <p>Adidas original men</p>
            <div className="card">                            
                <div><p>$1500</p></div>
                <div><button type="submit">Add+</button></div>
            </div>
        </div>                    
        </div>
    )
}

export default ProductItem;