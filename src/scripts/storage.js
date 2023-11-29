import Colors from './colors'

class Storage {
  constructor (props) {
    this.palettes = Colors
    this.getLocalPalettes()
  }

  getAllPalettes = () => this.palettes

  getLocalPalettes = () => {
    const localPalettes = localStorage.getItem('palettes')
    if (localPalettes) {
      const temp = JSON.parse(localPalettes)
      this.palettes = [...this.palettes, ...temp]
    }
  }

  getPaletteNames () { return this.palettes.map(c => c.paletteName) }

  getPaletteById = (id) => { return this.palettes.find(c => c.id === id) }

  savePalette = (palette) => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const newPalettes = local ? [...local, palette] : [palette]
    localStorage.setItem('palettes', JSON.stringify(newPalettes))
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
