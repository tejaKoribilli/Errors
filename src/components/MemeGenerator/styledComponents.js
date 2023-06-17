// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: 'flex';
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 100vw;
    padding: 60px;
    display: flex;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const LabelText = styled.label`
  font-size: 16px;
  color: #7e858e;
  margin-top: 20px;
  margin-bottom: 6px;
`

export const InputFeild = styled.input`
  padding: ${props => (props.option ? '20px' : '10px')};
  border: 1px solid #7e858e;
  color: ${props => (props.select ? '#1e293b' : '#7e858e ')};
  border-radius: 6px;
  outline: none;
  font-weight: ${props => (props.select ? '500' : '')};
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 16px;
  width: 160px;
  padding: 15px;
  border: none;
  margin-top: 30px;
  border-radius: 8px;
`

export const FontSizeDropDown = styled.select`
  padding: 10px;
  border: 1px solid #7e858e;
  outline: none;
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 300px;
  width: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 120px;
  font-size: ${props => props.fontSize};
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ImageContainerOne = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${props => (props.imageUrl !== '' ? '300px' : '0px')};
    width: 300px;
    font-size: ${props => props.fontSize};
    text-align: center;
    color: #ffffff;
    font-weight: 600;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const ParagraphEle = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 600;
`
