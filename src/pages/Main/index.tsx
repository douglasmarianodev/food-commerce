import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import logo from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'

export default function Main() {
  return (
    <Container>
      <MyOrder />
      <Sidebar/>
      <section style={{padding: '2rem'}}>
        <img src={logo} width={200} alt="imagem da logo xpoint" />
        <Outlet />
      </section>
    </Container>
  )
}
