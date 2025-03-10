// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }
  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }
  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }
  renderActiveImg = () => {
    const {isActive} = this.state
    const image = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button type="button" className="btn" onClick={this.onToggleIsActive}>
        <img className="img" src={image} alt={altText} />
      </button>
    )
  }
  render() {
    const {faqDetails} = this.state
    const {questionText} = faqDetails
    return (
      <li className="list">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
