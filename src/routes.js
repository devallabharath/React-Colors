import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Palette from './pages/palette'
import NewPalette from './pages/newPalette'
import Shades from './pages/shades'
import Colors from './scripts/colors'
import { generatePalette, generateShades } from './scripts/colorHerlpers';

class Router extends Component {
  constructor (props) {
    super(props)
    this.state = { palettes: Colors }
  }

  componentDidMount () { this.getLocalPalettes() }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(p) => <Home {...p} palettes={this.state.palettes} deletePalette={this.deletePalette} />} />
          <Route
            exact
            path='/palettes/new'
            render={(p) => {
              return (<NewPalette
                {...p}
                paletteNames={this.getPaletteNames()}
                Save={this.setLocalPalettes}
              />)
            }}
          />
          <Route
            exact
            path='/palettes/:id'
            render={(p) => {
              const colors = this.getPaletteById(p.match.params.id)
              return <Palette {...p} palette={generatePalette(colors)} />
            }}
          />
          <Route
            exact
            path='/shades/:id/:name/:color'
            render={(p) => {
              const { id, color, name } = p.match.params
              const colorr = '#' + color
              return <Shades Id={id} {...p} palette={generateShades(name, colorr)} />
            }}
          />
          <Route path='*' render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }

  getLocalPalettes = () => {
    const localPalettes = localStorage.getItem('palettes')
    if (localPalettes) {
      const temp = JSON.parse(localPalettes)
      this.setState({ palettes: [...this.state.palettes, ...temp] })
    }
  }

  setLocalPalettes = (palette) => {
    const local = JSON.parse(localStorage.getItem('palettes'))
    const newPalettes = local ? [...local, palette] : [palette]
    localStorage.setItem('palettes', JSON.stringify(newPalettes))
  }

  getPaletteNames () { return this.state.palettes.map(c => c.paletteName) }

  getPaletteById (id) { return this.state.palettes.find(c => c.id === id) }

  deletePalette = (id) => {
    const local = JSON.parse(localStorage.getItem('palettes')).filter(p=>p.id!==id)
    const state = this.state.palettes.filter(p=>p.id!==id)
    localStorage.setItem('palettes', JSON.stringify(local))
    this.setState({palettes: state})
  }

}

export default Router
