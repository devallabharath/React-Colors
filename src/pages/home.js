import { PureComponent } from 'react'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'
import { useParams, useNavigate } from 'react-router-dom'

class HomePage extends PureComponent {

  render () {
    const {navigate, Storage} = this.props
    const palettes = Storage.getAllPalettes()
    return (
      <div className="Home">
        <Navbar Type='home' navigate={navigate} />
        <div className="home-palettes">
          {palettes.map(c =>
            <MiniPalette key={c.id}
              palette={c}
              Delete={this.deletePalette}
            />
          )}
        </div>
      </div>
    )
  }

  deletePalette = (id) => {
    this.props.Storage.deletePalette(id)
    this.forceUpdate()
  }

}

const Home = (p) => <HomePage {...p} navigate={useNavigate()} params={useParams()}/>

export default Home
