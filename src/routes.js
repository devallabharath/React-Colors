import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Palette from './pages/palette'
import NewPalette from './pages/newPalette'
import Shades from './pages/shades'
import Storage from './scripts/storage'

class Router extends Component {

  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home Storage={Storage} />} />
          <Route exact path='/palettes/new' element={<NewPalette Storage={Storage} />} />
          <Route exact path='/palettes/:id' element={<Palette Storage={Storage} />}
          />
          <Route exact path='/shades/:id/:name/:color' element={<Shades />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    )
  }

}

export default Router
