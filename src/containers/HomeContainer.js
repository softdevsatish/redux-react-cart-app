import Home from '../components/Home'
import { connect } from 'react-redux'
import { addToCart, removeCart } from '../services/actions/actions'

const mapStateToProps = state => ({
    // data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeCartHandler: data => dispatch(removeCart(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;