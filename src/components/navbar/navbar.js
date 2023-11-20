import { PureComponent } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { SlIcon, SlSelect, SlOption } from '@shoelace-style/shoelace/dist/react';

class Navbar extends PureComponent {
  render () {
    const { Name, Format, changeFormat, back, slider, Level, changeLevel } = this.props;
    return <nav>
      <div className='nav-part'>
        <button>
          <Link to={back}><SlIcon name='arrow-left-circle-fill' /></Link>
        </button>
        <h4>{Name}</h4>
      </div>
      {slider &&<Slider className='Slider' min={100} max={900} step={100}
        marks={{
          100: '100', 200: '200', 300: '300', 400: '400',
          500: '500', 600: '600', 700: '700', 800: '800', 900: '900'
        }}
        included={false} defaultValue={Level} onChange={changeLevel} />}
      <SlSelect className='color-format' value={Format}
        size='small' hoist filled onSlChange={changeFormat}>
        <SlOption value="hex">Hex</SlOption>
        <SlOption value="rgb">RGB</SlOption>
        <SlOption value="rgba">RGBA</SlOption>
      </SlSelect>
    </nav>;
  }

}

export default Navbar;
