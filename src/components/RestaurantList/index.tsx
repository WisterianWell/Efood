import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          tags={restaurant.tags}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
