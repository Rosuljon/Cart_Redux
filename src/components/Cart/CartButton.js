import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const badge = useSelector(state => state.cart.totalQuantity);
  const clickHandler=()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
