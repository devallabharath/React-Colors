import { Component } from 'react'
import Palette from './components/palette/palette'
import Colors from './assets/colors'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <Palette {...Colors[2]}/>
      </div>
    )
  }
}

export default App
