import { Component } from 'react'
import Colors from '../../scripts/colors'
import MiniPalette from '../../components/miniPalette/miniPalette'
import './home.css'

class Home extends Component {

  render () {
    return (
      <div className="Home">
        <h1>home</h1>
        <div className="home-palettes">
          {Colors.map(c =><MiniPalette palette={c} />)}
        </div>
      </div>
    )
  }
}

export default Home
