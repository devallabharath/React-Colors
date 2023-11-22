import { PureComponent } from 'react'
import Colors from '../scripts/colors'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'

class Home extends PureComponent {

  render () {
    return (
      <div className="Home">
        <Navbar Name='Palettes' home={true} />
        <div className="home-palettes">
          {Colors.map(c => <MiniPalette key={c.id} palette={c} />)}
        </div>
      </div>
    )
  }
}

export default Home
