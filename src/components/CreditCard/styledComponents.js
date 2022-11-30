// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
  }
`
export const CardOne = styled.div`
  background-color: #3b4b69;
  width: 50%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 90%;
    min-height: 50vh;
  }
`
export const Heading = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const CardTwo = styled.div`
  background-color: white;
  width: 50%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 50vh;
  }
`
export const ImgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 300px;
  width: 500px;
  border-radius: 25px;
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 30vh;
  }
`
export const InnerCardOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 768px) {
    height: 45vh;
  }
`
export const ParaOne = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
  margin-top: 110px;
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`
export const ParaTwo = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-left: 15px;
  margin-bottom: 10px;
`
export const ParaThree = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 300;
  margin-left: 15px;
`
export const InnerCardTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`
export const HeadingTwo = styled.h1`
  color: #344e7a;
  font-size: 25px;
  font-family: 'Roboto';
  margin-bottom: 40px;
`
export const SecondInnerCardTwo = styled.div`
  height: 40vh;
  width: 90%;
  box-shadow: 0px 8px 40px rgba(10, 10, 10, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #475569;
`
export const InputOne = styled.input`
  height: 40px;
  width: 70%;
  border: 1px solid #c3cad9;
  padding-left: 20px;
  margin-top: 30px;
  outline: none;
`
