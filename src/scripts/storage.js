import Colors from './colors'
import { useEffect } from 'react'
import { useLocalStorage } from './hooks'

function Storage () {
  // localStorage.clear()
  const [Hidden, setHidden] = useLocalStorage('hidden')
  const [Deleted, setDeleted] = useLocalStorage('deleted')
  const [Favourites, setFavourites] = useLocalStorage('favourites')
  const [AllPalettes, setAllPalettes] = useLocalStorage('palettes')

  useEffect(() => {
    if (!localStorage.getItem('setup-done')) {
      localStorage.setItem('setup-done', true)
      localStorage.setItem('palettes', JSON.stringify(Colors))
    }
  }, [])

  const getCount = () => [Hidden.length, Favourites.length, Deleted.length]

  const getHiddenIds = () => Hidden

  const getFavouriteIds = () => Favourites

  const getDeletedIds = () => Deleted

  const getPalettes = () => AllPalettes.filter((p) => ![...Hidden, ...Deleted].includes(p.id))

  const getHiddenPalettes = () => AllPalettes.filter((p) => Hidden.includes(p.id))

  const getFavouritePalettes = () => AllPalettes.filter((p) => Favourites.includes(p.id))

  const getDeletedPalettes = () => AllPalettes.filter((p) => Deleted.includes(p.id))

  const getPaletteNames = () => AllPalettes.map(p => p.paletteName)

  const getPaletteById = (id) => AllPalettes.find(p => p.id === id)

  const savePalette = (palette) => setAllPalettes([...AllPalettes, palette])

  const toggleFavourite = (id) => Favourites.includes(id) ? removeFavourite(id) : addFavourite(id)

  const addFavourite = (id) => setFavourites([...Favourites, id])

  const removeFavourite = (id) => setFavourites(Favourites.filter((pid) => pid !== id))

  const clearFavourites = () => setFavourites([])

  const hidePalette = (id) => setHidden([...Hidden, id])

  const showPalette = (id) => setHidden(Hidden.filter((pid) => pid !== id))

  const showAllPalettes = () => setHidden([])

  const deletePalette = (id) => setDeleted([...Deleted, id])

  const restorePalette = (id) => setDeleted(Deleted.filter((pid) => pid !== id))

  const deleteFromBin = (id) => {
    setAllPalettes(AllPalettes.filter(p => p.id !== id))
    setDeleted(Deleted.filter((pid) => pid !== id))
  }

  const clearTrash = () => {
    setAllPalettes(AllPalettes.filter((p) => !Deleted.includes(p.id)))
    setDeleted([])
  }

  return {
    getPalettes,
    getHiddenIds,
    getFavouriteIds,
    getDeletedIds,
    getCount,
    getHiddenPalettes,
    getFavouritePalettes,
    getDeletedPalettes,
    getPaletteNames,
    getPaletteById,
    savePalette,
    toggleFavourite,
    addFavourite,
    removeFavourite,
    clearFavourites,
    hidePalette,
    showPalette,
    showAllPalettes,
    deletePalette,
    restorePalette,
    deleteFromBin,
    clearTrash
  }
}

export default Storage
