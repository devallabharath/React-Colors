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

  localWrite = (addrs: string, data: any[]): void => {
    localStorage.setItem(addrs, JSON.stringify(data))
  }

  initialSetup = (): void => {
    localStorage.setItem('setup-done', 'true')
    localStorage.setItem('palettes', JSON.stringify(Colors))
    localStorage.setItem('hidden', '[]')
    localStorage.setItem('deleted', '[]')
    localStorage.setItem('favourites', '[]')
  }

  getHiddenIds = (): string[] => this.hidden

  getFavouriteIds = (): string[] => this.favourites

  getDeletedIds = (): string[] => this.deleted

  getHiddenPalettes = (): rawPaletteType[] => this.palettes.filter(p => this.hidden.includes(p.id))

  getFavouritePalettes = (): rawPaletteType[] => this.palettes.filter(p => this.favourites.includes(p.id))

  getDeletedPalettes = (): rawPaletteType[] => this.palettes.filter(p => this.deleted.includes(p.id))

  getPaletteNames = (): string[] => this.palettes.map(p => p.paletteName)

  getPalettes = (): rawPaletteType[] => this.palettes.filter(p => ![...this.hidden, ...this.deleted].includes(p.id))

  getPaletteById = (id: string): rawPaletteType | undefined => this.palettes.find(p => p.id === id)

  savePalette = (palette: rawPaletteType): void => {
    this.palettes.push(palette)
    this.localWrite('palettes', this.palettes)
  }

  toggleFavourite = (id: string) => {
    if (this.favourites.includes(id)) return this.removeFavourite(id)
    this.addFavourite(id)
  }

  addFavourite = (id: string): void => {
    this.favourites.push(id)
    this.localWrite('favourites', this.favourites)
  }

  removeFavourite = (id: string): void => {
    this.favourites = this.favourites.filter(pid => pid !== id)
    this.localWrite('favourites', this.favourites)
  }

  clearFavourites = (): void => {
    this.favourites = []
    this.localWrite('favourites', [])
  }

  hidePalette = (id: string): void => {
    this.hidden.push(id)
    this.localWrite('hidden', this.hidden)
    if (this.favourites.includes(id)) this.removeFavourite(id)
  }

  showPalette = (id: string): void => {
    this.hidden = this.hidden.filter(pid => pid !== id)
    this.localWrite('hidden', this.hidden)
  }

  showAllPalettes = (): void => {
    this.hidden = []
    this.localWrite('hidden', this.hidden)
  }

  deletePalette = (id: string): void => {
    this.deleted.push(id)
    this.localWrite('deleted', this.deleted)
    if (this.favourites.includes(id)) this.removeFavourite(id)
  }

  restorePalette = (id: string): void => {
    this.deleted = this.deleted.filter(pid => pid !== id)
    this.localWrite('deleted', this.deleted)
  }

  deleteFromBin = (id: string): void => {
    this.palettes = this.palettes.filter(p => p.id !== id)
    this.localWrite('palettes', this.palettes)
    this.deleted = this.deleted.filter(pid => pid !== id)
    this.localWrite('deleted', this.deleted)
  }

  clearTrash = (): void => {
    this.palettes = this.palettes.filter(p => !this.deleted.includes(p.id))
    this.deleted = []
    this.localWrite('deleted', [])
    this.localWrite('palettes', this.palettes)
  }
}

export default Storage
