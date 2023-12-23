import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { generatePalette } from '../utils/colors';
import '../styles/palette.css'

const PalettePage: React.FC<any> = ({ Storage }) => {
  const [Level, setLevel] = useState<string>('500')
  const [Format, setFormat] = useState<'hex' | 'rgb' | 'rgba'>('hex')
  const [params] = useSearchParams()
  const palette = Storage.getPaletteById(params.get('id'))
  const { paletteName, colors, id } = generatePalette(palette)

  const changeFormat = (e: any): void => { setFormat(e.target.value) }
  const changeLevel = (v: string): void => { setLevel(v) }

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