import { Component } from 'react'
import Palette from './components/palette/palette'
import Colors from './scripts/colors'
import { generatePalette } from './scripts/colorHerlpers';
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/");

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <Palette palette={generatePalette(Colors[4])}/>
      </div>
    )
  }
}

export default App
