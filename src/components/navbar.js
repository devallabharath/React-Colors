import { PureComponent } from 'react';
import Slider from 'rc-slider';
import { SlIcon, SlSelect, SlOption, SlTooltip } from '@shoelace-style/shoelace/dist/react';
import '../styles/navbar.css'

class Navbar extends PureComponent {
  render () {
    const { Type } = this.props;
    return (
      <nav>
        {Type === 'home' && this.homebar()}
        {Type === 'new' && this.newbar()}
        {Type === 'palette' && this.colorbar()}
        {Type === 'shades' && this.colorbar()}
        {Type === '405' && this.homebar(false)}
      </nav >
    )
  }

  homebar = (btn = true) => {
    const { history } = this.props
    return (
      <div className="top">
        <div className='nav-part'>
          <h3>ReactColors</h3>
        </div>
        {btn &&
          <button className='new-button'
            onClick={() => history.push('/palettes/new')}
          >
            New Palette
          </button>
        }
      </div>
    )
  }

  newbar = () => {
    const { Name, goBack, goHome, onSave, onDiscard } = this.props
    return (
      <>
        <div className="top">
          <div className='nav-part'>
            <button className='back-button' onClick={goBack}>
              <SlIcon name='arrow-left-circle-fill' />
            </button>
            <button className='home-button' onClick={goHome}>
              <SlIcon name='house-fill' />
            </button>
          </div>
          <div className="nav-part">
            <span className='Name' onClick={this.props.changeName}>
              {Name??'New Palette'}
              <SlIcon name='pencil-fill'/>
            </span>
          </div>
          <div className="nav-part">
            <SlTooltip content='Discard' placement='bottom'>
              <button className='del-button' onClick={onDiscard}>
                <SlIcon name='x' />
              </button>
            </SlTooltip>
            <SlTooltip content='Save' placement='bottom'>
              <button className='save-button' onClick={onSave}>
                <SlIcon name='check-lg' />
              </button>
            </SlTooltip>
          </div>
        </div>
        <div className="bottom">
          <button onClick={this.props.addBox}>Add New</button>
          <button onClick={this.props.random}>Random All</button>
          <button onClick={this.props.clearAll}>Clear All</button>
        </div>
      </>
    )
  }

  colorbar = () => {
    const { Name, Format, changeFormat, slider, Level, changeLevel } = this.props;
    return (
      <>
        <div className="top">
          <div className='nav-part'>
            <button className='back-button' onClick={this.props.history.goBack}>
              <SlIcon name='arrow-left-circle-fill' />
            </button>
            <button className='home-button' onClick={() => this.props.history.push('/')}>
              <SlIcon name='house-fill' />
            </button>
          </div>
          <h4>{Name}</h4>
          <SlSelect className='color-format' value={Format}
            size='small' filled onSlChange={changeFormat}>
            <SlOption value="hex"> Hex </SlOption>
            <SlOption value="rgb"> RGB </SlOption>
            <SlOption value="rgba"> RGBA </SlOption>
          </SlSelect>
        </div>
        {slider && this.slider(Level, changeLevel)}
      </>
    )
  }

  slider = (Level, changeLevel) => {
    return (
      <div className="bottom">
        <Slider className='Slider' min={100} max={900} step={100}
          marks={{
            100: '100', 200: '200', 300: '300', 400: '400',
            500: '500', 600: '600', 700: '700', 800: '800', 900: '900'
          }}
          included={false} defaultValue={Level} onChange={changeLevel} />
      </div>
    )
  }

}

export default Navbar;
