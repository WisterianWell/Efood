import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Header from '../../components/Header'

import foodImg1 from '../../assets/images/food1.png'
import Dish from '../../models/Dish'

const dishes: Dish[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    image: foodImg1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header page="profile" />
    <Banner />
    <DishesList dishes={dishes} />
  </>
)

export default Perfil
