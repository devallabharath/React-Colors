type color = {
  id: string
  name: string
  hex: string
  rgb: string
  rgba: string
}

type palette<T> = { id: string; paletteName: string; colors: T }

type dialog = { show: () => void; hide: () => void }

type renameProps = {
  ref: dialogRef
  Label: string
  IRef: any
  IName: string
  IValue: string | null
  IHolder: string
  IValidate: (name: string) => void
  OnSubmit: (e: any) => void
}

type yesnoProps = {
  ref: dialogRef
  Label: string
  Content: string
  YesName: string
  YesVariant:
    | 'default'
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
  Yes: () => void
}

type pickerProps = {
  ref: dialogRef
  Label: string
  color: string
  changeColor: (e: Event) => void
}

type func<P, R> = (props: P) => R

type funcWithRef<P, ref, R> = (props: P, ref: ref) => R

export type rawColor = { name: string; color: string }

export type rawColorWithId = { id: string } & rawColor

export type dialogRef = React.MutableRefObject<dialog | undefined>

export type inputRef = React.MutableRefObject<HTMLInputElement | undefined>

export type rawPaletteType = palette<rawColor[]>

export type shadesType = Omit<palette<Omit<color, 'id'>[]>, 'id'>

export type paletteType = palette<{ [property: string]: color[] }>

export type component<P> = func<P, JSX.Element>

export type renameDialog = funcWithRef<renameProps, dialogRef, any>

export type yesnoDialog = funcWithRef<yesnoProps, dialogRef, any>

export type pickerDialog = funcWithRef<pickerProps, dialogRef, any>
