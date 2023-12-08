import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Trash from './pages/trash'
import Hidden from './pages/hidden'
// import Config from './pages/config'
import Palette from './pages/palette'
import NewPalette from './pages/newPalette'
import Shades from './pages/shades'
import Storage from './scripts/storage'

const Router = () => <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home Storage={Storage} />} />
    {/* <Route path='/palettes' element={<Home Storage={Storage} />} /> */}
    <Route path='/hidden' element={<Hidden Storage={Storage} />} />
    <Route path='/trash' element={<Trash Storage={Storage} />} />
    {/* <Route path='/config' element={<Config Storage={Storage} />} /> */}
    <Route path='/palettes/new' element={<NewPalette Storage={Storage} />} />
    <Route path='/palettes/:id' element={<Palette Storage={Storage} />} />
    <Route path='/palettes/:id/:name/:color' element={<Shades />} />
    <Route path='*' element={<h1>Not Found</h1>} />
  </Routes>
</BrowserRouter>

export default Router
