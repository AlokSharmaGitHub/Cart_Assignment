import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../containers/headerContainer";

const Cart = (props)=>{
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        setCartItem(props.data);
    }, []);
    //setCartItem(props.data);
    //console.log("cart", cartItem);
    return(
        
        <div>
            <Header />
           <Row>
               <Col className="heading">
               <h3>Cart Item</h3>
               </Col>
           </Row>
             <Row className="container margin">
            {
                cartItem.length>0 ?
                cartItem.map((item) =>
                    
                        <Col sm={6}>
                       <div className="cart-wrapper">
                            <div className="img-wrapper item">
                                <img src={item.cardData.image} />
                            </div>
                            <div className="text-wrapper item">
                                <span>
                                    {item.cardData.category}
                    </span><br />
                                <span>
                                Price: {item.cardData.price}
                    </span>
                            </div> 
                            <div className="item">
                                
                            </div>
                        </div>
                        </Col>
                      
                    
                        
                    )

                    :
                    
                    <h4 className="emptyCart">There is No Item...</h4>
            }
              </Row> 
        </div>
    )
}

export default Cart;