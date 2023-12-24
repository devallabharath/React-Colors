type color = {
  id: string
  name: string
  hex: string
  rgb: string
  rgba: string
}

type palette<T> = {
  id: string
  paletteName: string
  colors: T
}

export type rawPaletteType = palette<{ name: string; color: string }[]>

export type shadesType = Omit<palette<Omit<color, 'id'>[]>, 'id'>

export type paletteType = palette<{ [property: string]: color[] }>

