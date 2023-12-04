import { SlDialog, SlInput, SlButton, SlColorPicker } from '@shoelace-style/shoelace/dist/react'
import '../styles/dialog.css'

const Dialog = (props) => {
  const render = () => {
    const { Label, Display, Close, Type } = props
    return (
      <SlDialog
        className='Dialog'
        label={Label}
        open={Display}
        onSlAfterHide={Close}
      >
        {Type === 'Rename' && renameDlg()}
        {Type === 'YesNo' && yesNoDlg()}
        {Type === 'Picker' && picker()}
      </SlDialog>
    )
  }

  const renameDlg = () => {
    const { IRef, IName, IValue, IHolder, IValidate, OnSubmit, Close } = props
    return (
      <form onSubmit={OnSubmit}>
        <SlInput
          ref={IRef}
          name={IName}
          required={true}
          minlength={3}
          placeholder={IHolder}
          value={IValue}
          onSlInput={IValidate}
        />
        <div className='footer'>
          <SlButton variant="normal" onClick={Close}>Cancel</SlButton>
          <SlButton type='submit' variant="primary">Rename</SlButton>
        </div>
      </form>
    )
  }

  const yesNoDlg = () => {
    const { Content, YesName, YesVariant, Yes, NoName, NoVariant, No } = props
    return (
      <>
        {Content}
        <div slot='footer'>
          <SlButton style={{ marginRight: '5px' }} variant={NoVariant} onClick={No}>
            {NoName}
          </SlButton>
          <SlButton variant={YesVariant} onClick={Yes}>
            {YesName}
          </SlButton>
        </div>
      </>
    )
  }

  const picker = () => {
    const { id, color, changeColor } = props
    return (
      <SlColorPicker
        inline
        size='small'
        noFormatToggle
        value={color}
        onSlChange={(e) => changeColor(id, e.target.value)}
      />
    )
  }

  return render()
}

export default Dialog
