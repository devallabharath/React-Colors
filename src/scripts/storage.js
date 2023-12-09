import Colors from './colors'

class Storage {
  constructor (props) {
    // localStorage.clear()
    if (!localStorage.getItem('setup-done')) this.initialSetup()
    this.hidden = JSON.parse(localStorage.getItem('hidden'))
    this.deleted = JSON.parse(localStorage.getItem('deleted'))
    this.favourites = JSON.parse(localStorage.getItem('favourites'))
    this.palettes = []
    this.getPalettes()
  }

  initialSetup = () => {
    localStorage.setItem('setup-done', true)
    localStorage.setItem('palettes', JSON.stringify(Colors))
    localStorage.setItem('hidden', '[]')
    localStorage.setItem('deleted', '[]')
    localStorage.setItem('favourites', '[]')
  }

  getPalettes = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const temp = [...this.hidden, ...this.deleted]
    this.palettes = local.filter((p) => !temp.includes(p.id))
  }

  getHiddenPalettes = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    return local.filter((p) => this.hidden.includes(p.id))
  }

  getFavouritePalettes = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    return local.filter((p) => this.favourites.includes(p.id))
  }

  getDeletedPalettes = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    return local.filter((p) => this.deleted.includes(p.id))
  }

  getPaletteNames () { return this.palettes.map(c => c.paletteName) }

  getPaletteById = (id) => { return this.palettes.find(c => c.id === id) }

  savePalette = (palette) => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const newPalettes = local ? [...local, palette] : [palette]
    localStorage.setItem('palettes', JSON.stringify(newPalettes))
    this.palettes = [...this.palettes, palette]
  }

  toggleFavourite = (id) => {
    if (this.favourites.includes(id)) return this.removeFavourite(id)
    this.addFavourite(id)
  }

  addFavourite = (id) => {
    const temp = [...this.favourites, id]
    localStorage.setItem('favourites', JSON.stringify(temp))
    this.favourites = temp
  }

  removeFavourite = (id) => {
    const temp = this.favourites.filter((pid)=> pid!==id)
    localStorage.setItem('favourites', JSON.stringify(temp))
    this.favourites = temp
  }

  clearFavourites = () => {
    localStorage.setItem('favourites', '[]')
    this.favourites = []
  }

  hidePalette = (id) => {
    const temp = [...this.hidden, id]
    localStorage.setItem('hidden', JSON.stringify(temp))
    this.hidden = temp
    this.getPalettes()
  }

  showPalette = (id) => {
    const hidden = JSON.parse(localStorage.getItem('hidden'))
    const temp = hidden.filter((pid) => pid !== id)
    localStorage.setItem('hidden', JSON.stringify(temp))
    this.hidden = temp
    this.getPalettes()
  }

  showAllPalettes = () => {
    localStorage.setItem('hidden', '[]')
    this.hidden = []
    this.getPalettes()
  }

  deletePalette = (id) => {
    const temp = [...this.deleted, id]
    localStorage.setItem('deleted', JSON.stringify(temp))
    this.deleted = temp
    this.getPalettes()
  }

  restorePalette = (id) => {
    const temp = this.deleted.filter((pid) => pid !== id)
    localStorage.setItem('deleted', JSON.stringify(temp))
    this.deleted = temp
    this.getPalettes()
  }

  deleteFromBin = (id) => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const temp = local.filter(p => p.id !== id)
    localStorage.setItem('palettes', JSON.stringify(temp))
    const deleted = JSON.parse(localStorage.getItem('deleted'))
    localStorage.setItem('deleted', JSON.stringify(deleted.filter((pid) => pid !== id)))
  }

  clearTrash = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const temp = local.filter((p)=> !this.deleted.includes(p.id))
    localStorage.setItem('palettes', JSON.stringify(temp))
    localStorage.setItem('deleted', '[]')
    this.deleted = []
    this.getPalettes()
  }
}

const storage = new Storage()

export default storage
