import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank you! Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
