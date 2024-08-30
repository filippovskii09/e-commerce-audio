import { removeProductFromCart } from '@/features/cart/cartSlice'
import { TrashIcon } from '@/icons/TrashIcon'

const DeleteCartItem = ({ id }) => <button onClick={() => removeProductFromCart(id)} className='p-1'><TrashIcon/></button>;

export default DeleteCartItem