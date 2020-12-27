import Product from '../components/product';
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/action'

const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Product)
// export default Product;
