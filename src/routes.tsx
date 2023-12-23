import { lazy, Suspense } from 'react'
import storage from './utils/storage'
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
const Home = lazy(() => import('./pages/home'))
const Favs = lazy(() => import('./pages/favourites'))
const Hidden = lazy(() => import('./pages/hidden'))
const Trash = lazy(() => import('./pages/trash'))
const NewPalette = lazy(() => import('./pages/newPalette'))
const Palette = lazy(() => import('./pages/palette'))
const Shades = lazy(() => import('./pages/shades'))
const NotFound = lazy(() => import('./pages/404'))

const Storage = new storage()

const Main = (): JSX.Element => {
  const [params] = useSearchParams()
  console.log(params.get('mode'))
  switch (params.get('mode')) {
    default: return <Suspense><Home Storage={Storage} /></Suspense>
    case null: return <Suspense><Home Storage={Storage} /></Suspense>
    case 'home': return <Suspense><Home Storage={Storage} /></Suspense>
    case 'favs': return <Suspense><Favs Storage={Storage} /></Suspense>
    case 'hidden': return <Suspense><Hidden Storage={Storage} /></Suspense>
    case 'trash': return <Suspense><Trash Storage={Storage} /></Suspense>
    case 'new': return <Suspense><NewPalette Storage={Storage} /></Suspense>
    case 'palette': return <Suspense><Palette Storage={Storage} /></Suspense>
    case 'shades': return <Suspense><Shades /></Suspense>
  }
}

const Router = () =>
  <BrowserRouter basename='/React-Colors'>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Suspense><NotFound /></Suspense>} />
    </Routes>
  </BrowserRouter>

export default Router
