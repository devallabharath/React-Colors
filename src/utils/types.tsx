type _color = {
  id: string
  name: string
  hex: string
  rgb: string
  rgba: string
}

type _palette<T> = { id: string; paletteName: string; colors: T }

type dialog = { show: () => void; hide: () => void }

type baseDialog = { ref: dialogRef; Label: string }

type renameProps = baseDialog & {
  IRef: any
  IName: string
  IHolder: string
  IValidate: (name: string) => void
  OnSubmit: (e: any) => void
  Before?: () => void
}

type yesnoProps = baseDialog & {
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

type pickerProps = baseDialog & {
  color: string
  changeColor: (e: Event) => void
}

type newBarProps = {
  IRef: any
  Name: string | null
  goHome: () => void
  addBox: () => void
  random: () => void
  clearAll: () => void
  onDiscard: () => void
  onSave: () => void
  changeName: () => void
}

type colorBarProps = {
  Type: string
  Name: string
  Format: string
  changeFormat: (e: Event) => void
  Level?: string
  changeLevel?: (v: string) => void
  back: string
  isSlider: boolean
}

type fthBarProps = {
  Type: string
  isDrawer: boolean
  onBtnClick?: () => void
}

interface colorBoxProps {
  Type: 'color' | 'shade'
  Id?: string
  Format: 'hex' | 'rgb' | 'rgba'
  name: string
  hex: string
  rgb: string
  rgba: string
}

type drawerProps = { ref: dialogRef; Contained: boolean }

type func<P, R> = (props: P) => R

type funcWithRef<P, ref, R> = (props: P, ref: ref) => R

export type rawColor = { name: string; color: string }

export type rawColorWithId = { id: string } & rawColor

export type dialogRef = React.MutableRefObject<dialog | undefined>

export type inputRef = React.MutableRefObject<HTMLInputElement | undefined>

export type rawPalette = _palette<rawColor[]>

export type shades = Omit<_palette<Omit<_color, 'id'>[]>, 'id'>

export type palette = _palette<{ [property: string]: _color[] }>

export type component<P> = func<P, JSX.Element>

export type renameDialog = funcWithRef<renameProps, dialogRef, any>

export type yesnoDialog = funcWithRef<yesnoProps, dialogRef, any>

export type pickerDialog = funcWithRef<pickerProps, dialogRef, any>

export type drawer = funcWithRef<drawerProps, dialogRef, any>

export type newBar = func<newBarProps, JSX.Element>

export type colorBar = func<colorBarProps, JSX.Element>

export type fthBar = func<fthBarProps, JSX.Element>

export type colorBox = func<colorBoxProps, JSX.Element>
