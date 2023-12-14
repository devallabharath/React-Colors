import Colors from './colors'

class Storage {
  constructor (props) {
    // localStorage.clear()
    if (!localStorage.getItem('setup-done')) this.initialSetup()
    this.hidden = JSON.parse(localStorage.getItem('hidden'))
    this.deleted = JSON.parse(localStorage.getItem('deleted'))
    this.favourites = JSON.parse(localStorage.getItem('favourites'))
    this.palettes = JSON.parse(localStorage.getItem('palettes'))
  }

  initialSetup = () => {
    localStorage.setItem('setup-done', true)
    localStorage.setItem('palettes', JSON.stringify(Colors))
    localStorage.setItem('hidden', '[]')
    localStorage.setItem('deleted', '[]')
    localStorage.setItem('favourites', '[]')
  }

  getCount = () => [this.hidden.length, this.favourites.length, this.deleted.length]

  getPalettes = () => this.palettes.filter(p => ![...this.hidden, ...this.deleted].includes(p.id))

  getHiddenIds = () => this.hidden

  getFavouriteIds = () => this.favourites

  getDeletedIds = () => this.deleted

  getHiddenPalettes = () => this.palettes.filter(p => this.hidden.includes(p.id))

  getFavouritePalettes = () => this.palettes.filter(p => this.favourites.includes(p.id))

  getDeletedPalettes = () => this.palettes.filter(p => this.deleted.includes(p.id))

  getPaletteNames = () => this.palettes.map(c => c.paletteName)

  getPaletteById = id =>  this.palettes.find(c => c.id === id)

  savePalette = (palette) => {
    this.palettes.push(palette)
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
  }

  toggleFavourite = (id) => {
    if (this.favourites.includes(id)) return this.removeFavourite(id)
    this.addFavourite(id)
  }

  addFavourite = (id) => {
    this.favourites.push(id)
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  removeFavourite = (id) => {
    this.favourites = this.favourites.filter((pid)=> pid!==id)
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  clearFavourites = () => {
    this.favourites = []
    localStorage.setItem('favourites', '[]')
  }

  hidePalette = (id) => {
    this.hidden.push(id)
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
  }

  showPalette = (id) => {
    this.hidden = this.hidden.filter((pid) => pid !== id)
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
  }

  showAllPalettes = () => {
    this.hidden = []
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
  }

  deletePalette = (id) => {
    this.deleted.push(id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
  }

  restorePalette = (id) => {
    this.deleted = this.deleted.filter((pid) => pid !== id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
  }

  deleteFromBin = (id) => {
    this.palettes = this.palettes.filter(p => p.id !== id)
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
    this.deleted = this.deleted.filter(p => p.id !== id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
  }

  clearTrash = () => {
    this.palettes = this.palettes.filter((p)=> !this.deleted.includes(p.id))
    this.deleted = []
    localStorage.setItem('deleted', '[]')
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
  }
}

export default Storage

// function Storage () {
//   // localStorage.clear()
//   const [Hidden, setHidden] = useLocalStorage('hidden')
//   const [Deleted, setDeleted] = useLocalStorage('deleted')
//   const [Favourites, setFavourites] = useLocalStorage('favourites')
//   const [AllPalettes, setAllPalettes] = useLocalStorage('palettes')

//   useEffect(() => {
//     if (!localStorage.getItem('setup-done')) {
//       localStorage.setItem('setup-done', true)
//       localStorage.setItem('palettes', JSON.stringify(Colors))
//     }
//   }, [])

//   const getCount = () => [Hidden.length, Favourites.length, Deleted.length]

//   const getHiddenIds = () => Hidden

//   const getFavouriteIds = () => Favourites

//   const getDeletedIds = () => Deleted

//   const getPalettes = () => AllPalettes.filter((p) => ![...Hidden, ...Deleted].includes(p.id))

//   const getHiddenPalettes = () => AllPalettes.filter((p) => Hidden.includes(p.id))

//   const getFavouritePalettes = () => AllPalettes.filter((p) => Favourites.includes(p.id))

//   const getDeletedPalettes = () => AllPalettes.filter((p) => Deleted.includes(p.id))

//   const getPaletteNames = () => AllPalettes.map(p => p.paletteName)

//   const getPaletteById = (id) => AllPalettes.find(p => p.id === id)

//   const savePalette = (palette) => setAllPalettes([...AllPalettes, palette])

//   const toggleFavourite = (id) => Favourites.includes(id) ? removeFavourite(id) : addFavourite(id)

//   const addFavourite = (id) => setFavourites([...Favourites, id])

//   const removeFavourite = (id) => setFavourites(Favourites.filter((pid) => pid !== id))

//   const clearFavourites = () => setFavourites([])

//   const hidePalette = (id) => setHidden([...Hidden, id])

//   const showPalette = (id) => setHidden(Hidden.filter((pid) => pid !== id))

//   const showAllPalettes = () => setHidden([])

//   const deletePalette = (id) => setDeleted([...Deleted, id])

//   const restorePalette = (id) => setDeleted(Deleted.filter((pid) => pid !== id))

//   const deleteFromBin = (id) => {
//     setAllPalettes(AllPalettes.filter(p => p.id !== id))
//     setDeleted(Deleted.filter((pid) => pid !== id))
//   }

//   const clearTrash = () => {
//     setAllPalettes(AllPalettes.filter((p) => !Deleted.includes(p.id)))
//     setDeleted([])
//   }

//   return {
//     getPalettes, getHiddenIds, getFavouriteIds, getDeletedIds,
//     getCount, getHiddenPalettes, getFavouritePalettes, getDeletedPalettes,
//     getPaletteNames, getPaletteById, savePalette, toggleFavourite,
//     addFavourite, removeFavourite, clearFavourites, hidePalette,
//     showPalette, showAllPalettes, deletePalette, restorePalette,
//     deleteFromBin, clearTrash
//   }

// }

// const PaletteContext = createContext()

// const PaletteProvider = (props) => {
//   return (
//     <PaletteContext.Provider value={Storage()}>
//       {props.children}
//     </PaletteContext.Provider>
//   )
// }

// export { PaletteProvider, PaletteContext }
