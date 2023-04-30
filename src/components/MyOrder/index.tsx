import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "../../hooks/useCart"
import { Container } from "./styles"

export function MyOrder() {
  const { cart } = useCart()
  return (
    <Container to={'cart'}>
      <span>Pedido</span>
     <FiShoppingCart size={25} />
      {cart.length !==0 && <span>{`${cart.length}`.padStart(2,'0')}</span>}
    </Container>
  )
}
