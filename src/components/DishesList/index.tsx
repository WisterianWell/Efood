import Dish from '../../models/Dish'
import DishCard from '../DishCard'
import { List } from './styles'

export type Props = {
  dishes: Dish[]
}

const DishesList = ({ dishes }: Props) => (
  <div className="container">
    <List>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          name={dish.name}
          image={dish.image}
          description={dish.description}
        />
      ))}
    </List>
  </div>
)

export default DishesList
