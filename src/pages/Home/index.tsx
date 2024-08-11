import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

import restaurant1 from '../../assets/images/restaurant1.png'
import restaurant2 from '../../assets/images/restaurant2.png'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    image: restaurant1,
    rating: '4.9',
    tags: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    image: restaurant2,
    rating: '4.9',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    image: restaurant2,
    rating: '4.9',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    name: 'Hioki Sushi',
    image: restaurant1,
    rating: '4.9',
    tags: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 6,
    name: 'Hioki Sushi',
    image: restaurant1,
    rating: '4.9',
    tags: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    image: restaurant2,
    rating: '4.9',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <RestaurantList restaurants={restaurantes} />
  </>
)

export default Home
