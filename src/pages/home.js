import { PureComponent } from 'react'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'

class Home extends PureComponent {

  render () {
    const {history, palettes} = this.props
    return (
      <div className="Home">
        <Navbar Type='home' history={history} />
        <div className="home-palettes">
          {palettes.map(c => <MiniPalette key={c.id} palette={c} />)}
        </div>
      </div>
    )
  }
}

export default Home
