import { forwardRef } from 'react'
import { SlDialog, SlInput, SlButton, SlColorPicker } from '@shoelace-style/shoelace/dist/react'
import '../styles/dialog.css'

interface dialogPropsType {
  Label: string
  IRef: any
  IName: string
  IValue: string | null
  IHolder: string
  IValidate: (e: Event) => void
  OnSubmit: (e: any) => void
}

const RenameDialog = forwardRef((props: dialogPropsType, ref: any) => {
  const { Label, IRef, IName, IValue, IHolder, IValidate, OnSubmit } = props
  return (
    <SlDialog
      ref={ref}
      className='Dialog'
      label={Label}
      open={false}
      onSlAfterHide={() => ref.current.hide()}
    >
      <form onSubmit={OnSubmit}>
        <SlInput
          ref={IRef}
          name={IName}
          required={true}
          minlength={3}
          placeholder={IHolder}
          value={IValue ?? ''}
          onSlInput={IValidate}
        />
        <div className='footer'>
          <SlButton variant="neutral" onClick={() => ref.current.hide()}>Cancel</SlButton>
          <SlButton type='submit' variant="primary">Rename</SlButton>
        </div>
      </form>
    </SlDialog>
  )
})

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
  color: string
  changeColor: (e: Event) => void
}

const PickerDialog = forwardRef((props: pickerPropsType, ref: any) => {
  const { Label, color, changeColor } = props
  return (
    <SlDialog
      ref={ref}
      className='Dialog'
      label={Label}
      open={false}
      onSlAfterHide={() => ref.current.hide()}
    >
      <SlColorPicker
        inline
        size='small'
        noFormatToggle
        value={color}
        onSlChange={changeColor}
      />
    </SlDialog>
  )
})

export { RenameDialog, YesNoDialog, PickerDialog }
