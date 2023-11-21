import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import Palette from './components/palette/palette'
import Colors from './scripts/colors'
import { generatePalette } from './scripts/colorHerlpers';


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
              const colors = Colors.find(c => c.id === p.match.params.id)
              return < Palette palette={generatePalette(colors)} />
            }}
          />
          <Route path='*' render={() => <h1>Sorry</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
