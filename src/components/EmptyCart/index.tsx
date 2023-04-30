import { Button, Container } from "./styles"
import  manHumburger from '../../assets/man-and-burger.svg'
interface EmptyCartProps {
  title: string
}
export function EmptyCart({title}: EmptyCartProps){
  return<Container>
    <h2>{title}</h2>
    <Button to="/">
      Ver cardápio
    </Button>
    <img src={manHumburger} alt="homem com hamburger" />
  </Container>
}
