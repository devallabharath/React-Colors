import { nanoid } from "nanoid"
import chroma from 'chroma-js'
import { rawPaletteType, shadesType, paletteType } from "./types"

const palettes: rawPaletteType[] = [
  {
    paletteName: "Material UI Colors",
    id: "material-ui-colors",
    colors: [
      { name: "red", color: "#F44336" },
      { name: "pink", color: "#E91E63" },
      { name: "purple", color: "#9C27B0" },
      { name: "deeppurple", color: "#673AB7" },
      { name: "indigo", color: "#3F51B5" },
      { name: "blue", color: "#2196F3" },
      { name: "lightblue", color: "#03A9F4" },
      { name: "cyan", color: "#00BCD4" },
      { name: "teal", color: "#009688" },
      { name: "green", color: "#4CAF50" },
      { name: "lightgreen", color: "#8BC34A" },
      { name: "lime", color: "#CDDC39" },
      { name: "yellow", color: "#FFEB3B" },
      { name: "amber", color: "#FFC107" },
      { name: "orange", color: "#FF9800" },
      { name: "deeporange", color: "#FF5722" },
      { name: "brown", color: "#795548" },
      { name: "grey", color: "#9E9E9E" },
      { name: "bluegrey", color: "#607D8B" }
    ]
  },
  {
    paletteName: "Flat UI Colors v1",
    id: "flat-ui-colors-v1",
    colors: [
      { name: "Turquoise", color: "#1abc9c" },
      { name: "Emerald", color: "#2ecc71" },
      { name: "PeterRiver", color: "#3498db" },
      { name: "Amethyst", color: "#9b59b6" },
      { name: "WetAsphalt", color: "#34495e" },
      { name: "GreenSea", color: "#16a085" },
      { name: "Nephritis", color: "#27ae60" },
      { name: "BelizeHole", color: "#2980b9" },
      { name: "Wisteria", color: "#8e44ad" },
      { name: "MidnightBlue", color: "#2c3e50" },
      { name: "SunFlower", color: "#f1c40f" },
      { name: "Carrot", color: "#e67e22" },
      { name: "Alizarin", color: "#e74c3c" },
      { name: "Clouds", color: "#ecf0f1" },
      { name: "Concrete", color: "#95a5a6" },
      { name: "Orange", color: "#f39c12" },
      { name: "Pumpkin", color: "#d35400" },
      { name: "Pomegranate", color: "#c0392b" },
      { name: "Silver", color: "#bdc3c7" },
      { name: "Asbestos", color: "#7f8c8d" }
    ]
  },
  {
    paletteName: "Flat UI Colors Dutch",
    id: "flat-ui-colors-dutch",
    colors: [
      { name: "Sunflower", color: "#FFC312" },
      { name: "Energos", color: "#C4E538" },
      { name: "BlueMartina", color: "#12CBC4" },
      { name: "LavenderRose", color: "#FDA7DF" },
      { name: "BaraRose", color: "#ED4C67" },
      { name: "RadiantYellow", color: "#F79F1F" },
      { name: "AndroidGreen", color: "#A3CB38" },
      { name: "MediterraneanSea", color: "#1289A7" },
      { name: "LavenderTea", color: "#D980FA" },
      { name: "VerryBerry", color: "#B53471" },
      { name: "PuffinsBill", color: "#EE5A24" },
      { name: "PixelatedGrass", color: "#009432" },
      { name: "MerchantMarineBlue", color: "#0652DD" },
      { name: "ForgottenPurple", color: "#9980FA" },
      { name: "HollyHock", color: "#833471" },
      { name: "RedPigment", color: "#EA2027" },
      { name: "TurkishAqua", color: "#006266" },
      { name: "20000LeaguesUnderTheSea", color: "#1B1464" },
      { name: "CircumorbitalRing", color: "#5758BB" },
      { name: "MagentaPurple", color: "#6F1E51" }
    ]
  },
  {
    paletteName: "Flat UI Colors American",
    id: "flat-ui-colors-american",
    colors: [
      { name: "LightGreenishBlue", color: "#55efc4" },
      { name: "FadedPoster", color: "#81ecec" },
      { name: "GreenDarnerTail", color: "#74b9ff" },
      { name: "ShyMoment", color: "#a29bfe" },
      { name: "CityLights", color: "#dfe6e9" },
      { name: "MintLeaf", color: "#00b894" },
      { name: "RobinsEggBlue", color: "#00cec9" },
      { name: "ElectronBlue", color: "#0984e3" },
      { name: "ExodusFruit", color: "#6c5ce7" },
      { name: "SoothingBreeze", color: "#b2bec3" },
      { name: "SourLemon", color: "#ffeaa7" },
      { name: "FirstDate", color: "#fab1a0" },
      { name: "PinkGlamour", color: "#ff7675" },
      { name: "Pico8Pink", color: "#fd79a8" },
      { name: "AmericanRiver", color: "#636e72" },
      { name: "BrightYarrow", color: "#fdcb6e" },
      { name: "OrangeVille", color: "#e17055" },
      { name: "Chi-Gong", color: "#d63031" },
      { name: "PrunusAvium", color: "#e84393" },
      { name: "DraculaOrchid", color: "#2d3436" }
    ]
  },
  {
    paletteName: "Flat UI",
    id: "flat-ui",
    colors: [
      { name: "OrchidOrange", color: "#FEA47F" },
      { name: "SpiroDiscoBall", color: "#25CCF7" },
      { name: "HoneyGlow", color: "#EAB543" },
      { name: "SweetGarden", color: "#55E6C1" },
      { name: "FallingStar", color: "#CAD3C8" },
      { name: "RichGardenia", color: "#F97F51" },
      { name: "ClearChill", color: "#1B9CFC" },
      { name: "WhitePepper", color: "#F8EFBA" },
      { name: "Keppel", color: "#58B19F" },
      { name: "ShipsOfficer", color: "#2C3A47" },
      { name: "FieryFuchsia", color: "#B33771" },
      { name: "BlueBell", color: "#3B3B98" },
      { name: "GeorgiaPeach", color: "#FD7272" },
      { name: "OasisStream", color: "#9AECDB" },
      { name: "BrightUbe", color: "#D6A2E8" },
      { name: "MagentaPurple", color: "#6D214F" },
      { name: "EndingNavyBlue", color: "#182C61" },
      { name: "SasquatchSocks", color: "#FC427B" },
      { name: "PineGlade", color: "#BDC581" },
      { name: "HighlighterLavender", color: "#82589F" }
    ]
  },
  {
    paletteName: 'Dracula',
    id: 'dracula-theme',
    colors: [
      { name: "Background", color: "#282A36" },
      { name: "Current Line", color: "#44475A" },
      { name: "Foreground", color: "#F8F8F2" },
      { name: "Comment", color: "#6272A4" },
      { name: "Cyan", color: "#8BE9FD" },
      { name: "Green", color: "#50FA7B" },
      { name: "Orange", color: "#FFB86C" },
      { name: "Pink", color: "#FF79C6" },
      { name: "Purple", color: "#BD93F9" },
      { name: "Red", color: "#FF5555" },
      { name: "Yellow", color: "#F1FA8C" },
    ]
  },
  {
    paletteName: 'Catppuccin Mocha',
    id: 'catppuccin-mocha',
    colors: [
      { name: 'Rosewater', color: '#f5e0dc' },
      { name: 'Flamingo', color: '#f2cdcd' },
      { name: 'Pink', color: '#f5c2e7' },
      { name: 'Mauve', color: '#cba6f7' },
      { name: 'Red', color: '#f38ba8' },
      { name: 'Maroon', color: '#eba0ac' },
      { name: 'Peach', color: '#fab387' },
      { name: 'Yellow', color: '#f9e2af' },
      { name: 'Green', color: '#a6e3a1' },
      { name: 'Teal', color: '#94e2d5' },
      { name: 'Sky', color: '#89dceb' },
      { name: 'Sapphire', color: '#74c7ec' },
      { name: 'Blue', color: '#89b4fa' },
      { name: 'Lavender', color: '#b4befe' },
      { name: 'Text', color: '#cdd6f4' },
      { name: 'Subtext1', color: '#bac2de' },
      { name: 'Subtext0', color: '#a6adc8' },
      { name: 'Overlay2', color: '#9399b2' },
      { name: 'Overlay1', color: '#7f849c' },
      { name: 'Overlay0', color: '#6c7086' },
      { name: 'Surface2', color: '#585b70' },
      { name: 'Surface1', color: '#45475a' },
      { name: 'Surface0', color: '#313244' },
      { name: 'Base', color: '#1e1e2e' },
      { name: 'Mantle', color: '#181825' },
      { name: 'Crust', color: '#11111b' },
    ]
  },
  {
    paletteName: 'One Dark',
    id: 'one-dark',
    colors: [
      { name: 'Chalky', color: '#e5c07b' },
      { name: 'Coral', color: '#e06c75' },
      { name: 'Dark', color: '#5c6370' },
      { name: 'Error', color: '#f44747' },
      { name: 'FountainBlue', color: '#56b6c2' },
      { name: 'Green', color: '#98c379' },
      { name: 'Invalid', color: '#ffffff' },
      { name: 'LightDark', color: '#7f848e' },
      { name: 'LightWhite', color: '#abb2bf' },
      { name: 'Malibu', color: '#61afef' },
      { name: 'Purple', color: '#c678dd' },
      { name: 'Whiskey', color: '#d19a66' },
      { name: 'DeepRed', color: '#BE5046' },
    ]
  },
  {
    paletteName: 'Monokai Theme',
    id: 'monokai-theme',
    colors: [
      { name: 'Background', color: '#272822' },
      { name: 'Foreground', color: '#F8F8F2' },
      { name: 'Comment', color: '#75715E' },
      { name: 'Red', color: '#F92672' },
      { name: 'Orange', color: '#FD971F' },
      { name: 'LightOrange', color: '#E69F66' },
      { name: 'Yellow', color: '#E6DB74' },
      { name: 'Green', color: '#A6E22E' },
      { name: 'Blue', color: '#66D9EF' },
      { name: 'Purple', color: '#AE81FF' },
    ]
  },
];

const levels: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

function generateShades(name: string, color: string) {
  const newPalette: shadesType = { paletteName: name, colors: [] }
  const shades = generateScale(color).reverse()
  for (const i in shades) {
    newPalette.colors.push({
      name: levels[i],
      hex: shades[i],
      rgb: chroma(shades[i]).css(),
      rgba: chroma(shades[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
    })
  }
  newPalette.colors.shift()
  return newPalette
}

function generatePalette(original: any) {
  let newPalette: paletteType = {
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
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
      })
    }
  }
  return newPalette
}

function generateScale(color: string, n: number = 10): string[] {
  const range = [chroma(color).darken(1.9).hex(), color, chroma(color).luminance(0.9).hex()]
  return chroma.scale(range).mode('lab').colors(n)
}

function arrayMove(array: any[], from: number, to: number): any[] {
  array = array.slice()
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
  return array
}

const template: { id: string, name: string, color: string }[] = [
  { id: nanoid(), name: 'Brilliant Rose', color: '#F653A6' },
  { id: nanoid(), name: 'Cornell Red', color: '#B31B1B' },
  { id: nanoid(), name: 'Cream', color: '#FFFDD0' },
  { id: nanoid(), name: 'Lavender Blush', color: '#FFF0F5' },
  { id: nanoid(), name: 'Aerospace Orange', color: '#FF4F00' },
  { id: nanoid(), name: 'Bole', color: '#79443B' },
  { id: nanoid(), name: 'Dark Purple', color: '#301934' },
  { id: nanoid(), name: 'Gold', color: '#FFD700' },
  { id: nanoid(), name: 'Night Black', color: '#111111' },
  { id: nanoid(), name: 'Aquamarine', color: '#00FFBF' },
  { id: nanoid(), name: 'Melon', color: '#FDBCB4' },
  { id: nanoid(), name: 'Turquoise', color: '#40E0D0' },
  { id: nanoid(), name: 'Celtic Blue', color: '#246BCE' },
  { id: nanoid(), name: 'Blue Violet', color: '#8A2BE2' },
  { id: nanoid(), name: 'Baby Powder', color: '#FEFEFA' },
  { id: nanoid(), name: 'Gunmetal', color: '#2A3439' }
]

export default palettes
export { generatePalette, generateShades, arrayMove, template }
