import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { generatePalette } from '../utils/colors';
import '../styles/palette.css'

const PalettePage: React.FC<any> = ({ Storage }) => {
  const [Level, setLevel] = useState('500')
  const [Format, setFormat] = useState<'hex' | 'rgb' | 'rgba'>('hex')
  const params = useParams()
  const palette = Storage.getPaletteById(params.id)
  const { paletteName, colors, id } = generatePalette(palette)

  const changeFormat = (e: any) => { setFormat(e.target.value) }
  const changeLevel = (v: string) => { setLevel(v) }

  return (
    <div className="Palette">
      <Navbar
        Type='palette'
        Name={paletteName}
        Format={Format}
        changeFormat={changeFormat}
        Level={Level}
        changeLevel={changeLevel}
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
