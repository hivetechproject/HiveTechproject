import ProductItem from "../componets/productItem";

const Products=()=>{
    return(
        <div>
             
    <section>
        <div className="container">

            <div className="sidebar">

                <div className="sidecontainer">

                <div className="filter">
                    <div className="dropdown">
                        <button type="button">FILTER BY GENDER <i className="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="">Men</a>
                            <a href="">Women</a>
                        </div>                      
                    </div>
                </div>

               
                    <div className="catagory">
                        <h3>Catagory List</h3>
                        <div>
                            <a href="#">Hats</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Shirts</a>
                        </div>
                    </div>
                </div>    
                
            </div>

            <div className="mainbar">
                <div className="title">
                    <h2>T-shirts</h2>
               </div>

            <div className="itembox">
                   <h3>Mens's</h3>
                   <br/><br/>
                <div className="items">
                   <ProductItem/>
                   <ProductItem/>
                   <ProductItem/>
                </div>

                <br/>
                <br/>

                <div className="items">
                   <ProductItem/>
                   <ProductItem/>
                   <ProductItem/>
                </div>
                
            </div>

        
        </div>
    </div>
    </section>
    <div className="pagination">
        <a href="#" className="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">8</a>          
     </div>   
        </div>

    )
}

export default Products;