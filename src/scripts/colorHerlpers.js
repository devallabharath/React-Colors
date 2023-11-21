import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

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
  const range = [chroma(color).darken(1.4).hex(), color, '#fff']
  return chroma.scale(range).mode('lab').colors(n)
}

export {generatePalette}
