import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generateShades (name,color) {
  const newPalette = {
    paletteName: name,
    colors: []
  }
  const shades = generateScale(color).reverse()
  for (const i in shades) {
    newPalette.colors.push({
      name: levels[i],
      hex: shades[i],
      rgb: chroma(shades[i]).css(),
      rgba: chroma(shades[i]).css().replace('rgb','rgba').replace(')', ',1.0)')
    })
  }
  newPalette.colors.shift()
  return newPalette
}

function generatePalette (original) {
  let newPalette = {
    paletteName: original.paletteName,
    id: original.id,
    colors: {}
  }
  for (const level of levels) { newPalette.colors[level] = [] }
  for (const color of original.colors) {
    const scale = generateScale(color.color).reverse()
    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb','rgba').replace(')', ',1.0)')
      })
    }
  }
  return newPalette
}

function generateScale (color, n=10) {
  const range = [chroma(color).darken(1.9).hex(), color, chroma(color).luminance(0.9).hex()]
  return chroma.scale(range).mode('lab').colors(n)
}

export {generatePalette, generateShades}