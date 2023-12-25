import { forwardRef, lazy } from 'react'
import { renameDialog, yesnoDialog, pickerDialog } from '../utils/types'
import '../styles/dialog.css'
const SlDialog = lazy(() =>
  import('@shoelace-style/shoelace/dist/react/dialog')
)
const SlInput = lazy(() => import('@shoelace-style/shoelace/dist/react/input'))
const SlButton = lazy(() =>
  import('@shoelace-style/shoelace/dist/react/button')
)
const SlColorPicker = lazy(() =>
  import('@shoelace-style/shoelace/dist/react/color-picker')
)

const RenameDialog: renameDialog = forwardRef(
  ({ Label, IRef, IName, IValue, IHolder, IValidate, OnSubmit }, ref: any) => {
    return (
      <SlDialog ref={ref} className='Dialog' label={Label}>
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

const YesNoDialog: yesnoDialog = forwardRef(
  ({ Label, Content, YesName, YesVariant, Yes }, ref: any) => {
    return (
      <SlDialog ref={ref} className='Dialog' label={Label}>
        {Content}
        <div className='footer'>
          <SlButton onClick={() => ref.current.hide()}>Cancel</SlButton>
          <SlButton variant={YesVariant} onClick={Yes}>
            {YesName}
          </SlButton>
        </div>
      </SlDialog>
    )
  }
)

const PickerDialog: pickerDialog = forwardRef(
  ({ Label, color, changeColor }, ref: any) => {
    return (
      <SlDialog ref={ref} className='Dialog' label={Label}>
        <SlColorPicker
          inline
          size='small'
          noFormatToggle
          value={color}
          onSlChange={changeColor}
        />
      </SlDialog>
    )
  }
)

export { RenameDialog, YesNoDialog, PickerDialog }
