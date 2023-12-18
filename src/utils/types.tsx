export type rawPaletteType = {
  id: string,
  paletteName: string,
  colors: {
    name: string,
    color: string
  }[]
}

export type shadesType = {
  paletteName: string,
  colors: {
    name: number,
    hex: string,
    rgb: string,
    rgba: string,
  }[]
}

export type paletteType = {
  id: string,
  paletteName: string,
  colors: {
    [property: number]: {
      id: string,
      name: string,
      hex: string,
      rgb: string,
      rgba: string
    }[]
  }
}
