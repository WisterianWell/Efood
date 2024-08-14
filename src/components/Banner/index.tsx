import { Image, Subtitle, Title } from './styles'

import bannerImg from '../../assets/images/restaurant_banner1.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Subtitle>italiana</Subtitle>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
