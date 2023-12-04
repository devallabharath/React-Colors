import Colors from './colors'

class Storage {
  constructor (props) {
    // localStorage.clear()
    if(!localStorage.getItem('setup-done')) this.initialSetup()
    this.hidden = JSON.parse(localStorage.getItem('hidden'))
    this.palettes = []
    this.getPalettes()
  }

  initialSetup = () => {
    localStorage.setItem('setup-done', true)
    localStorage.setItem('palettes', JSON.stringify(Colors))
    localStorage.setItem('hidden', '[]')
  }

  getPalettes = () => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    this.palettes = local.filter((p)=>!this.hidden.includes(p.id))
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
    const temp = hidden.filter((pid)=>pid!==id)
    localStorage.setItem('hidden', JSON.stringify(temp))
    this.hidden = temp
    this.getPalettes()
  }

  deletePalette = (id) => {
    const local = JSON.parse(localStorage.getItem('palettes')).filter(p => p.id !== id)
    const state = this.palettes.filter(p => p.id !== id)
    localStorage.setItem('palettes', JSON.stringify(local))
    this.palettes = state
  }
}

const storage = new Storage()

export default storage
