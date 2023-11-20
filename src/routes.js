import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import Palette from './components/palette/palette'
import Shades from './components/shades/shades'
import Colors from './scripts/colors'
import { generatePalette, generateShades } from './scripts/colorHerlpers';


class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route
            exact
            path='/palettes/:id'
            render={(p) => {
              const colors = this.getColorsById(p.match.params.id)
              return < Palette palette={generatePalette(colors)} />
            }}
          />
          <Route
            exact
            path='/shades/:id/:name/:color'
            render={(p) => {
              const {id, color, name} = p.match.params
              const colorr = '#' + color
              return <Shades Id={id} palette={generateShades(name,colorr)} />
            }}
          />
          <Route path='*' render={() => <h1>Sorry</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }

  getColorsById (id) {return Colors.find(c=>c.id===id)}

}

export default Router
