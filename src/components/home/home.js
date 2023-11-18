import { Component } from 'react'
import Colors from '../../scripts/colors'
import MiniPalette from '../miniPalette/miniPalette'

class Home extends Component {

  render () {
    return (
      <div className="Home">
        <h1>home</h1>
        {Colors.map(c=><MiniPalette palette={c}/>)}
      </div>
    )
  }
}

export default Home
