import { PureComponent } from 'react'
import Slider from 'rc-slider';
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

class Navbar extends PureComponent {

  render () {
    const { Name, Range, handleRange } = this.props
    return (
      <nav>
        <div className='nav-part'>
          <button><SlIcon name='arrow-left-circle-fill' /></button>
          <h4>{Name}</h4>
        </div>
        <Slider
          className='Slider'
          min={100}
          max={900}
          step={100}
          marks={{
            100: '100', 200: '200', 300: '300', 400: '400', 500: '500',
            600: '600', 700: '700', 800: '800', 900: '900',
          }}
          included={false}
          defaultValue={Range}
          onChange={handleRange}
        />
      </nav>
    )
  }
}

export default Navbar
