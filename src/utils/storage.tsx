import Colors from './colors'
import { rawPaletteType } from "./types"

class Storage {
  hidden: string[]
  deleted: string[]
  favourites: string[]
  palettes: rawPaletteType[]

  constructor () {
    // localStorage.clear()
    if (!localStorage.getItem('setup-done')) this.initialSetup()
    const hidden = localStorage.getItem('hidden')
    this.hidden = hidden ? JSON.parse(hidden) : []
    const deleted = localStorage.getItem('deleted')
    this.deleted = deleted ? JSON.parse(deleted) : []
    const favourites = localStorage.getItem('favourites')
    this.favourites = favourites ? JSON.parse(favourites) : []
    const palettes = localStorage.getItem('palettes')
    this.palettes = palettes ? JSON.parse(palettes) : []
  }

  initialSetup = () => {
    localStorage.setItem('setup-done', 'true')
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

  getPaletteById = (id: string) => this.palettes.find(c => c.id === id)

  savePalette = (palette: rawPaletteType) => {
    this.palettes.push(palette)
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
  }

  toggleFavourite = (id: string) => {
    if (this.favourites.includes(id)) return this.removeFavourite(id)
    this.addFavourite(id)
  }

  addFavourite = (id: string) => {
    this.favourites.push(id)
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  removeFavourite = (id: string) => {
    this.favourites = this.favourites.filter((pid) => pid !== id)
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  clearFavourites = () => {
    this.favourites = []
    localStorage.setItem('favourites', '[]')
  }

  hidePalette = (id: string) => {
    this.hidden.push(id)
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
    if (this.favourites.includes(id)) this.removeFavourite(id)
  }

  showPalette = (id: string) => {
    this.hidden = this.hidden.filter((pid) => pid !== id)
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
  }

  showAllPalettes = () => {
    this.hidden = []
    localStorage.setItem('hidden', JSON.stringify(this.hidden))
  }

  deletePalette = (id: string) => {
    this.deleted.push(id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
    if (this.favourites.includes(id)) this.removeFavourite(id)
  }

  restorePalette = (id: string) => {
    this.deleted = this.deleted.filter((pid) => pid !== id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
  }

  deleteFromBin = (id: string) => {
    this.palettes = this.palettes.filter(p => p.id !== id)
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
    this.deleted = this.deleted.filter(pid => pid !== id)
    localStorage.setItem('deleted', JSON.stringify(this.deleted))
  }

  clearTrash = () => {
    this.palettes = this.palettes.filter((p) => !this.deleted.includes(p.id))
    this.deleted = []
    localStorage.setItem('deleted', '[]')
    localStorage.setItem('palettes', JSON.stringify(this.palettes))
  }
}

export default Storage
