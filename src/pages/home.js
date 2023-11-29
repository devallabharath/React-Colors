import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [, refresh] = useState(false)
  const navigate = useNavigate()

  function render () {
    return (<div className="Home">
      <Navbar Type='home' navigate={navigate} />
      <div className="home-palettes">
        {Storage.palettes.map(c =>
          <MiniPalette key={c.id}
            palette={c}
            Delete={deletePalette}
          />
        )}
      </div>
    </div>)
  }

  const deletePalette = (id) => {
    Storage.deletePalette(id)
    refresh((old) => !old)
  }

  return render()
}

export default HomePage
