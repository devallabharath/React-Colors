import { PureComponent, createRef } from 'react'
import { SlDialog, SlInput, SlButton } from '@shoelace-style/shoelace/dist/react'
import '../styles/dialog.css'

class Dialog extends PureComponent {
  constructor (props) {
    super(props)
    this.input = createRef()
  }

  Validate = (e) => {
    const { paletteNames } = this.props
    const name = e.target.value
    const duplicate = paletteNames.includes(name)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    this.input.current.setCustomValidity(msg)
  }

  render () {
    const { Type } = this.props
    const { Display, Close, Yes, No } = this.props
    const Lable = Type === 'renamePalette' ? 'Rename Palette' : 'Confirm'
    return (
      <SlDialog
        className='Dialog'
        label={Lable}
        open={Display}
        onSlAfterHide={Close}
      >
        {Type === 'renamePalette' && this.renamePalette()}
        {Type === 'renameColor' && this.renameColor()}
        {Type === 'confirm' && <>
          Are you sure this will discard all the changes?
          <div slot='footer'>
            <SlButton style={{ marginRight: '5px' }} variant="danger" onClick={No}>
              Discard
            </SlButton>
            <SlButton variant="primary" onClick={Yes}>
              Stay
            </SlButton>
          </div>
        </>}
      </SlDialog>
    )
  }

  renamePalette = () => {
    const { Input, Close, Rename } = this.props
    return <form onSubmit={Rename}>
      <SlInput
        autofocus
        ref={this.input}
        name='paletteName'
        required={true}
        minlength={3}
        placeholder="Palette Name"
        value={Input}
        onSlInput={this.Validate}
      />
      <div className='footer'>
        <SlButton variant="normal" onClick={Close}>
          Cancel
        </SlButton>
        <SlButton type='submit' variant="primary">
          Rename
        </SlButton>
      </div>
    </form>
  }

  renameColor = () => {
    const { Input, Close, Rename } = this.props
    return <form onSubmit={Rename}>
      <SlInput
        autofocus
        name='name'
        required={true}
        minlength={3}
        value={Input}
      />
      <div className='footer'>
        <SlButton variant="normal" onClick={Close}>
          Cancel
        </SlButton>
        <SlButton type='submit' variant="primary">
          Rename
        </SlButton>
      </div>
    </form>
  }
}

export default Dialog
