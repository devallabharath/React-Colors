import { forwardRef } from 'react'
import { SlDialog, SlInput, SlButton, SlColorPicker } from '@shoelace-style/shoelace/dist/react'
import '../styles/dialog.css'

interface dialogPropsType {
  Label: string
  Display: boolean
  Close: () => void
  IRef: any
  IName: string
  IValue: string
  IHolder: string
  IValidate: () => void
  OnSubmit: () => void

}

const RenameDialog = (props: dialogPropsType) => {
  const { Label, Display, Close } = props
  const { IRef, IName, IValue, IHolder, IValidate, OnSubmit } = props
  return (
    <SlDialog
      className='Dialog'
      label={Label}
      open={Display}
      onSlAfterHide={Close}
    >
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
          <SlButton variant="neutral" onClick={Close}>Cancel</SlButton>
          <SlButton type='submit' variant="primary">Rename</SlButton>
        </div>
      </form>
    </SlDialog>
  )
}

interface yesNoPropsType {
  Label: string
  Content: string
  YesName: string
  YesVariant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger'
  Yes: () => void
}

const YesNoDialog = forwardRef((props: yesNoPropsType, ref: any) => {
  // const ref: any = useRef()
  const { Label, Content, YesName, YesVariant, Yes } = props
  return (
    <SlDialog
      ref={ref}
      className='Dialog'
      label={Label}
      open={false}
      onSlAfterHide={() => ref.current.hide()}
    >
      {Content}
      <div slot='footer'>
        <SlButton style={{ marginRight: '5px' }} variant='default' onClick={() => ref.current.hide()}>
          Cancel
        </SlButton>
        <SlButton variant={YesVariant} onClick={Yes}>
          {YesName}
        </SlButton>
      </div>
    </SlDialog>
  )
})

interface pickerPropsType {
  Label: string
  Display: boolean
  Close: () => void
    id: string
  color: string
  changeColor: (id: string, e: Event) => void
}

const PickerDialog = (props: pickerPropsType) => {
  const { Label, Display, Close, id, color, changeColor } = props
  return (
    <SlDialog
      className='Dialog'
      label={Label}
      open={Display}
      onSlAfterHide={Close}
    >
      <SlColorPicker
        inline
        size='small'
        noFormatToggle
        value={color}
        onSlChange={e => changeColor(id, e)}
      />
    </SlDialog>
  )
}

export { RenameDialog, YesNoDialog, PickerDialog }
