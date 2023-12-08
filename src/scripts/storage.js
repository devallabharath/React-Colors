import Colors from './colors'

class Storage {
  constructor (props) {
    if (!localStorage.getItem('setup-done')) this.initialSetup()
    this.hidden = JSON.parse(localStorage.getItem('hidden'))
    this.deleted = JSON.parse(localStorage.getItem('deleted'))
    this.palettes = []
    this.getPalettes()
  }

  initialSetup = () => {
    localStorage.setItem('setup-done', true)
    localStorage.setItem('palettes', JSON.stringify(Colors))
    localStorage.setItem('hidden', '[]')
    localStorage.setItem('deleted', '[]')
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
