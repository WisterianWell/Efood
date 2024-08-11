import {
  Card,
  CardInfos,
  Title,
  Rating,
  Description,
  Button,
  Tag,
  Tags
} from './styles'

import star from '../../assets/images/star_favorite.svg'

type Props = {
  name: string
  image: string
  tags: string[]
  rating: string
  description: string
}

const RestaurantCard = ({ name, image, tags, rating, description }: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <CardInfos>
      <div>
        <Title>{name}</Title>
        <Rating>
          <Title>{rating}</Title>
          <img src={star} alt="Estrela" />
        </Rating>
      </div>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </CardInfos>
  </Card>
)

export default RestaurantCard
