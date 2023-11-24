import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Palette from './pages/palette'
import NewPalette from './pages/newPalette'
import Shades from './pages/shades'
import Colors from './scripts/colors'
import { generatePalette, generateShades } from './scripts/colorHerlpers';


class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(p) => <Home {...p}/>} />
          <Route
            exact
            path='/palettes/new'
            render={(p) => {
              return <NewPalette {...p} paletteNames={this.getPaletteNames()}/>
            }}
          />
          <Route
            exact
            path='/palettes/:id'
            render={(p) => {
              const colors = this.getColorsById(p.match.params.id)
              return <Palette {...p} palette={generatePalette(colors)} />
            }}
          />
          <Route
            exact
            path='/shades/:id/:name/:color'
            render={(p) => {
              const {id, color, name} = p.match.params
              const colorr = '#' + color
              return <Shades Id={id} {...p} palette={generateShades(name,colorr)} />
            }}
          />
          <Route path='*' render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }

  getPaletteNames () { return Colors.map(c=>c.paletteName)}

  getColorsById (id) {return Colors.find(c=>c.id===id)}

}

export default Router
