import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import { generatePalette } from '../scripts/colorHerlpers';
import '../styles/palette.css'

const PalettePage = ({ Storage }) => {
  const [Level, setLevel] = useState(500)
  const [Format, setFormat] = useState('hex')
  const navigate = useNavigate()
  const params = useParams()
  const palette = Storage.getPaletteById(params.id)
  const { paletteName, colors, id } = generatePalette(palette)

  return (
    <div className="Palette">
      <Navbar
        Type='palette'
        Name={paletteName}
        Format={Format}
        changeFormat={(f) => setFormat(f)}
        slider={true}
        Level={Level}
        changeLevel={(v) => setLevel(v)}
        back={'/'}
        navigate={navigate}
      />
      <div className="palette-colors">
        {colors[Level].map(c => <ColorBox key={c.hex} type='color' Id={id} {...c} format={Format} />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default PalettePage
