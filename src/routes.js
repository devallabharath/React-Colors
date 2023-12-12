import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Trash from './pages/trash'
import Hidden from './pages/hidden'
import Favourites from './pages/favourites'
// import Config from './pages/config'
import Palette from './pages/palette'
import NewPalette from './pages/newPalette'
import Shades from './pages/shades'
import { PaletteProvider } from './scripts/storage'

const Router = () => <BrowserRouter basename='/React-Colors'>
  <PaletteProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hidden' element={<Hidden />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/trash' element={<Trash />} />
      <Route path='/palettes/new' element={<NewPalette />} />
      <Route path='/palettes/:id' element={<Palette />} />
      <Route path='/palettes/:id/:name/:color' element={<Shades />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </PaletteProvider>
</BrowserRouter>

export default Router
