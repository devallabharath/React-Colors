import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {ColorBar as Navbar} from '../components/navbar'
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
        slider={true}
        Level={Level}
        changeLevel={(v) => setLevel(v)}
        back={-1}
        isSlider={true}
      />
      <div className="palette-colors">
        {colors[Level].map(c => <ColorBox key={c.hex} type='color' Id={id} {...c} format={Format} />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default PalettePage
