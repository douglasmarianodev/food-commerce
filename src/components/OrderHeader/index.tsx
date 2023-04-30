import { Link } from 'react-router-dom'
import logImg from '../../assets/logo.svg'
import { Container } from './styles'
import { useCart } from '../../hooks/useCart'
import { FiShoppingCart } from 'react-icons/fi'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/'>
        <img src={logImg} alt='PointX logo' />
      </Link>
      <div>
        <div>
          <h3>Meu pedido</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')} prato(s)</strong>
          </span>
        </div>
        <FiShoppingCart size={40} />
      </div>
    </Container>
  )
}
