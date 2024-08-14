import Button from '../Button'

import { Card, Description, Title } from './styles'

type Props = {
  name: string
  image: string
  description: string
}

const DishCard = ({ name, image, description }: Props) => (
  <Card>
    <div>
      <img src={image} alt="" />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Button type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </div>
  </Card>
)

export default DishCard
