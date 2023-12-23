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

const Storage = new storage()

const Main = (): JSX.Element => {
  const [params] = useSearchParams()
  const mode = params.get('mode')
  if (!mode || mode === 'home') {
    return <Suspense><Home Storage={Storage} /></Suspense>
  } else if (mode === 'favs') {
    return <Suspense><Favs Storage={Storage} /></Suspense>
  } else if (mode === 'hidden') {
    return <Suspense><Hidden Storage={Storage} /></Suspense>
  } else if (mode === 'trash') {
    return <Suspense><Trash Storage={Storage} /></Suspense>
  } else if (mode === 'new') {
    return <Suspense><NewPalette Storage={Storage} /></Suspense>
  } else if (mode === 'palette') {
    return <Suspense><Palette Storage={Storage} /></Suspense>
  } else if (mode === 'shades') {
    return <Suspense><Shades /></Suspense>
  } else return <div>404</div>
}

const Router = () =>
  <BrowserRouter basename='/React-Colors'>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>

export default Router
