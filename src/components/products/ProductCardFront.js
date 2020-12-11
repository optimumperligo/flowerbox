import styled from 'styled-components'
import { FaInfoCircle } from 'react-icons/fa'

export const ProductCardFront = ({ product }) => {
  return (
    <>
      <img src={product.media.source} alt={product.name} />
      <CardTop>
        <Title>{product.name}</Title>
        <Info type='button'><FaInfoCircle /></Info>
      </CardTop>
      <CardBottom>
        <Price>${product.price.raw}</Price>
        <Button type='button'>Add to Cart</Button>
      </CardBottom>
    </>
  )
}

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.theme.sizes.xSmall};
`

const CardBottom = styled.div`
  display: flex;
  margin: ${props => props.theme.sizes.xSmall};
`

const Title = styled.div`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: lowercase;
`

const Info = styled.button`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.large};
`

const Price = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.softWhite};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.sizes.xSmall};
`

const Button = styled.button`
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.sizes.xSmall};
  text-transform: lowercase;
`
