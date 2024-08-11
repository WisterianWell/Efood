class Restaurant {
  id: number
  name: string
  image: string
  tags: string[]
  rating: string
  description: string

  constructor(
    id: number,
    name: string,
    image: string,
    tags: string[],
    rating: string,
    description: string
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.tags = tags
    this.rating = rating
    this.description = description
  }
}

export default Restaurant
