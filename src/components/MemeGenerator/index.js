import {Component} from 'react'
import {
  BackgroundContainer,
  FormContainer,
  LabelText,
  InputFeild,
  GenerateButton,
  ImageContainer,
  ImageContainerOne,
  Heading,
  ParagraphEle,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {topText: '', bottomText: '', fontSize: '', imageUrl: ''}

  onSubmitForm = event => {
    event.preventDefault()

    const imageUrl = event.target.elements.imageUrl.value
    const topText = event.target.elements.topText.value
    const bottomText = event.target.elements.bottomText.value
    const fontSize = event.target.elements.fontSize.value

    this.setState({imageUrl, topText, bottomText, fontSize})
  }

  render() {
    const {topText, bottomText, imageUrl, fontSize} = this.state
    return (
      <BackgroundContainer data-testid="meme">
        <div>
          <Heading data-testid="testid">Meme Generator</Heading>
          <ImageContainerOne
            imageUrl={imageUrl}
            fontSize={fontSize}
            data-testid="meme"
          >
            <ParagraphEle fontSize={fontSize}>{topText}</ParagraphEle>
            <ParagraphEle fontSize={fontSize}>{bottomText}</ParagraphEle>
          </ImageContainerOne>
          <FormContainer onSubmit={this.onSubmitForm} data-testid="testid">
            <LabelText htmlFor="imageUrl" data-testid="testid">
              Image URL
            </LabelText>
            <InputFeild
              type="text"
              id="imageUrl"
              placeholder="Image URL"
              data-testid="testid"
            />
            <LabelText htmlFor="topText" data-testid="testid">
              Top Text
            </LabelText>
            <InputFeild
              type="text"
              id="topText"
              placeholder="Top Text"
              data-testid="testid"
            />
            <LabelText htmlFor="bottomText" data-testid="testid">
              Bottom Text
            </LabelText>
            <InputFeild
              type="text"
              id="bottomText"
              placeholder="Bottom Text"
              data-testid="testid"
            />
            <LabelText htmlFor="fontSize">Font Size</LabelText>
            <InputFeild as="select" id="fontSize" select>
              {fontSizesOptionsList.map(each => (
                <InputFeild
                  as="option"
                  value={each.optionId}
                  key={each.optionId}
                  option
                >
                  {each.displayText}
                </InputFeild>
              ))}
            </InputFeild>
            <GenerateButton type="submit" data-testid="testid">
              Generate
            </GenerateButton>
          </FormContainer>
        </div>
        <ImageContainer
          imageUrl={imageUrl}
          fontSize={fontSize}
          data-testid="meme"
        >
          <ParagraphEle fontSize={fontSize}>{topText}</ParagraphEle>
          <ParagraphEle fontSize={fontSize}>{bottomText}</ParagraphEle>
        </ImageContainer>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
