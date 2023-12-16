import { lazy, Suspense } from 'react'
import storage from './utils/storage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./pages/home'))
const Hidden = lazy(() => import('./pages/hidden'))
const Trash = lazy(() => import('./pages/trash'))
const NewPalette = lazy(() => import('./pages/newPalette'))
const Palette = lazy(() => import('./pages/palette'))
const Shades = lazy(() => import('./pages/shades'))

const Storage = new storage()

const Router = () => <BrowserRouter basename='/React-Colors'>
  <Routes>
    <Route path='/' element={<Suspense><Home Type='home' Storage={Storage} /></Suspense>} />
    <Route path='/hidden' element={<Suspense><Hidden Storage={Storage} /></Suspense>} />
    <Route path='/favourites' element={<Suspense><Home Type='favourites' Storage={Storage} /></Suspense>} />
    <Route path='/trash' element={<Suspense><Trash Storage={Storage} /></Suspense>} />
    <Route path='/palettes/new' element={<Suspense><NewPalette Storage={Storage} /></Suspense>} />
    <Route path='/palettes/:id' element={<Suspense><Palette Storage={Storage} /></Suspense>} />
    <Route path='/palettes/:id/:name/:color' element={<Suspense><Shades /></Suspense>} />
    <Route path='*' element={<h1>Not Found</h1>} />
  </Routes>
</BrowserRouter>

export default Router
