// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardOne,
  Heading,
  CardTwo,
  ImgContainer,
  InnerCardOne,
  ParaOne,
  ParaThree,
  ParaTwo,
  InnerCardTwo,
  HeadingTwo,
  SecondInnerCardTwo,
  InputOne,
} from './styledComponents'

const CreditCard = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const onChangeInputOne = event => {
    setCardNumber(event.target.value)
  }
  const onChangeInputTwo = event => {
    setCardName(event.target.value)
  }
  return (
    <BgContainer>
      <CardOne>
        <Heading>CREDIT CARD</Heading>
        <InnerCardOne>
          <ImgContainer data-testid="creditCard">
            <ParaOne>{cardNumber}</ParaOne>
            <ParaThree>CARDHOLDER NAME</ParaThree>
            <ParaTwo>{cardName}</ParaTwo>
          </ImgContainer>
        </InnerCardOne>
      </CardOne>
      <CardTwo>
        <InnerCardTwo>
          <SecondInnerCardTwo>
            <HeadingTwo>Payment Method</HeadingTwo>
            <InputOne
              type="text"
              onChange={onChangeInputOne}
              placeholder="Card Number"
            />
            <InputOne
              type="text"
              onChange={onChangeInputTwo}
              placeholder="Cardholder Name"
            />
          </SecondInnerCardTwo>
        </InnerCardTwo>
      </CardTwo>
    </BgContainer>
  )
}

export default CreditCard
