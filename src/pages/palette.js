import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { generatePalette } from '../utils/colors';
import '../styles/palette.css'

const PalettePage = (props) => {
  const [Level, setLevel] = useState(500)
  const [Format, setFormat] = useState('hex')
  const params = useParams()
  const Storage = props.Storage
  const palette = Storage.getPaletteById(params.id)
  const { paletteName, colors, id } = generatePalette(palette)

  return (
    <div className="Palette">
      <Navbar
        Type='palette'
        Name={paletteName}
        Format={Format}
        changeFormat={(e) => setFormat(e.target.value)}
        Level={Level}
        changeLevel={(v) => setLevel(v)}
        back={'/'}
        isSlider={true}
      />
      <div className="palette-colors">
        {colors[Level].map(c => <ColorBox
          key={c.hex}
          Type='color'
          Id={id}
          Format={Format}
          {...c}
        />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default PalettePage
