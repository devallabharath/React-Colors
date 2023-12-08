import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [state, refresh] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  function render () {
    return (<div className="Home">
      <Navbar Type='hidden' navigate={navigate} unhide={unhideAll} />
      <div className="home-palettes">
        {Storage.getHiddenPalettes().map(c =>
          <MiniPalette
            Type="hidden"
            key={c.id}
            Storage={Storage}
            palette={c}
          />
        )}
      </div>
    </div>)
  }

  const unhideAll = () => {
    refresh(!state)
  }

  return render()
}

export default HomePage
