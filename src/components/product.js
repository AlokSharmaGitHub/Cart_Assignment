import React, { useState, useEffect } from 'react'
import Header from "../containers/headerContainer";
import { Button, Row, Col } from 'react-bootstrap';
import '../App.css';

function Product(props) {
    //console.log("product", props.data);

    const [getValue, setValue] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((resp) => {
            resp.json().then((result) => {
                setValue(result);

            })
        })
    }, []);

    //console.log(getValue);






    return (

        <div>

<Header />
           <Row>
               <Col className="heading">
               <h3>Product List</h3>
               </Col>
           </Row>
            <Row className="container margin">
            {
                getValue ?
                    getValue.map((item) =>
                    
                        <Col sm={6}>
                       <div className="cart-wrapper">
                            <div className="img-wrapper item">
                                <img src={item.image} />
                            </div>
                            <div className="text-wrapper item">
                                <span>
                                    {item.category}
                    </span><br />
                                <span>
                                Price: {item.price}
                    </span>
                            </div> 
                            <div className="item">
                                <Button
                                    variant="danger"
                                    onClick={
                                        () => { props.addToCartHandler(item) }
                                    }>
                                    Add To Cart</Button>
                            </div>
                        </div>
                        </Col>
                      
                    
                        
                    )

                    :
                    <h4>There is No Product</h4>
            }
              </Row>
        </div>
    )
}
export default Product;