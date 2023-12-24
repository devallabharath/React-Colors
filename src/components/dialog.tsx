import { forwardRef } from 'react'
import {
  SlDialog,
  SlInput,
  SlButton,
  SlColorPicker,
} from '@shoelace-style/shoelace/dist/react'
import { renameDialog, yesnoDialog, pickerDialog } from '../utils/types'
import '../styles/dialog.css'

const RenameDialog: renameDialog = forwardRef((props, ref: any) => {
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
            onSlInput={(e: any) => IValidate(e.target.value)}
          />
          <div className='footer'>
            <SlButton variant='neutral' onClick={() => ref.current.hide()}>
              Cancel
            </SlButton>
            <SlButton type='submit' variant='primary'>
              Rename
            </SlButton>
          </div>
        </form>
      </SlDialog>
    )
  }
)

const YesNoDialog: yesnoDialog = forwardRef((props, ref: any) => {
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
        <SlButton
          style={{ marginRight: '5px' }}
          variant='default'
          onClick={() => ref.current.hide()}
        >
          Cancel
        </SlButton>
        <SlButton variant={YesVariant} onClick={Yes}>
          {YesName}
        </SlButton>
      </div>
    </SlDialog>
  )
})

const PickerDialog: pickerDialog = forwardRef(({ Label, color, changeColor }, ref: any) => {
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
