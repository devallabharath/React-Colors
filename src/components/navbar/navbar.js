import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { SlIcon, SlSelect, SlOption } from '@shoelace-style/shoelace/dist/react';

class Navbar extends PureComponent {
  render () {
    const { Name, Format, changeFormat, back } = this.props;
    return <nav>
      <div className='nav-part'>
        <button>
          <Link to={back}><SlIcon name='arrow-left-circle-fill' /></Link>
        </button>
        <h4>{Name}</h4>
      </div>
      <SlSelect className='color-format' value={Format} size='small' hoist filled onSlChange={changeFormat}>
        <SlOption value="hex">Hex</SlOption>
        <SlOption value="rgb">RGB</SlOption>
        <SlOption value="rgba">RGBA</SlOption>
      </SlSelect>
    </nav>;
  }

}

export default Navbar;
