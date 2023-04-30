import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'

import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  useEffect(() => {
    ;(async () => {
      // const burgerRequest = await getBurgers()
      // setBurgers(burgerRequest.data)

      // const drinksRequest = await getDrinks()
      // setDrinks(drinksRequest.data)

      // const iceCreamsRequest = await getIceCreams()
      // setIceCreams(iceCreamsRequest.data)

      // const pizzasRequest = await getPizzas()
      // setPizzas(pizzasRequest.data)

      // a froma de chamada acima funciona bem, mas podemos organizar melhor com o método abaixo.
      try {
        const burgerRequest = await getBurgers()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()
        const pizzasRequest = await getPizzas()
        const requests = [burgerRequest, drinksRequest, iceCreamsRequest, pizzasRequest]
        const [
          { data: burgerResponse },
          { data: drinksResponse },
          { data: iceCreamsResponse },
          { data: pizzasResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamsResponse)
        setPizzas(pizzasResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, drinks, iceCreams, pizzas }}>
      {children}
    </SnackContext.Provider>
  )
}
