import { lazy, Suspense } from 'react'
import StorageProvider from './utils/storage'
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
const Home = lazy(() => import('./pages/home'))
const Favs = lazy(() => import('./pages/favourites'))
const Hidden = lazy(() => import('./pages/hidden'))
const Trash = lazy(() => import('./pages/trash'))
const NewPalette = lazy(() => import('./pages/newPalette'))
const Palette = lazy(() => import('./pages/palette'))
const Shades = lazy(() => import('./pages/shades'))
const NotFound = lazy(() => import('./pages/404'))

const Main = (): JSX.Element => {
  const [params] = useSearchParams()
  const pages: any = {
    home: () => <Suspense><Home /></Suspense>,
    favs: () => <Suspense><Favs /></Suspense>,
    hidden: () => <Suspense><Hidden /></Suspense>,
    trash: () => <Suspense><Trash /></Suspense>,
    new: () => <Suspense><NewPalette /></Suspense>,
    palette: () => <Suspense><Palette /></Suspense>,
    shades: () => <Suspense><Shades /></Suspense>
  }
  return pages[params.get('mode') ?? 'home']()
}

const Router = () =>
  <StorageProvider>
    <BrowserRouter basename='/React-Colors'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<Suspense><NotFound /></Suspense>} />
      </Routes>
    </BrowserRouter>
  </StorageProvider>

export default Router
