import { PureComponent } from 'react'
import Colors from '../../scripts/colors'
import MiniPalette from '../../components/miniPalette/miniPalette'
import './home.css'

class Home extends PureComponent {

  render () {
    return (
      <div className="Home">
        <h1>home</h1>
        {/* // todo: navbar */}
        <div className="home-palettes">
          {Colors.map(c =><MiniPalette key={c.id} palette={c} />)}
        </div>
      </div>
    )
  }
}

export default Home
