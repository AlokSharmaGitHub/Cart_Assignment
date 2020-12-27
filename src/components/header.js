import React, {useState, useEffect} from 'react'
import {Navbar, Form, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Header(props)
{
  const history = useHistory();
  const [localValue, setlocalValue] = useState("");
   // console.warn("header", props.data)
   debugger;
   useEffect(() => {
    var loginStatus = localStorage.getItem("login");
    
    setlocalValue(loginStatus);
}, []);

   

    return(
        <div>
 <Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand href="#home">Assignment-Work</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {
      localValue == "successfull" ?
      <>
      <Nav.Link><Link to="/cartItem">Cart</Link></Nav.Link>
      <Nav.Link><Link to="/product">Product</Link></Nav.Link>
      <Nav.Link     onClick={() => {
  localStorage.clear()
  
    history.push('/login');
}}>Logout</Nav.Link>
      
  
      </>
      :
      null
    }

  
    <Form inline>
    {
      localValue == "successfull" ?
    <div className="add-to-cart">
             <span className="cart-count">{props.data.length}</span>
                <Link to="/cartItem"><img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" /></Link>
            </div>
            :
            null
}
            
    </Form>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}

export default Header;