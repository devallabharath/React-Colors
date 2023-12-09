import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dialog from '../components/dialog'
import MiniPalette from '../components/miniPalette'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import { useRefresh } from '../scripts/hooks'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [Dlg, setDlg] = useState(false)
  const Refresh = useRefresh()
  const navigate = useNavigate()

  function render () {
    const Favourites = Storage.getFavouritePalettes()
    return (<div className="Home">
      <Navbar Type='favourites' navigate={navigate} onBtnClick={showDlg} />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will remove all favourites...'
        Display={Dlg}
        id={null}
        YesName='Clear'
        YesVariant='danger'
        Yes={clearFavourites}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setDlg(false)}
      />
      {Favourites.length !== 0
        ? <div className="home-palettes">
          {Favourites.map(c => <MiniPalette
            Type="favourite"
            key={c.id}
            palette={c}
            rightIconClick={removeFavourite}
          />
          )}
        </div>
        : <div className="Empty">
          No palettes...
          <SlButton type='primary' onClick={() => navigate('/')}>
            Go Home
          </SlButton>
        </div>
      }
    </div>)
  }

  const removeFavourite = (id) => {
    Storage.removeFavourite(id)
    Refresh()
  }

  const showDlg = () => {
    if (Storage.favourites.length === 0) return
    setDlg(true)
  }

  const clearFavourites = () => {
    Storage.clearFavourites()
    setDlg(false)
    Refresh()
  }

  return render()
}

export default HomePage
