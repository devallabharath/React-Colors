import { Component } from 'react'
import Navbar from '../components/navbar'
import { SlColorPicker } from '@shoelace-style/shoelace/dist/react'
import '../styles/newPalette.css'

class NewPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picker: true
    }
  }

  render () {
    return (
      <div className="NewPalette">
        <Navbar
          Type='new'
          history={this.props.history}
          save={this.save}
        />
        <div className="newPalette-colors">
          <SlColorPicker size='small' value='#fff' />
        </div>
        {/* <SlDrawer
          placement='start'
          open={this.state.picker}
          onSlAfterHide={() => this.setState({picker:false})}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SlDrawer> */}
      </div>
    )
  }

  save = () => {
    alert('saved')
  }
}

export default NewPalette
