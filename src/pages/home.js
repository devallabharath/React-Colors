import { PureComponent } from 'react'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'

class Home extends PureComponent {

  render () {
    const {history, palettes, deletePalette, editPalette} = this.props
    return (
      <div className="Home">
        <Navbar Type='home' history={history} />
        <div className="home-palettes">
          {palettes.map(c => <MiniPalette key={c.id} palette={c} deletePalette={deletePalette} editPalette={editPalette} />)}
        </div>
      </div>
    )
  }
}

export default Home
