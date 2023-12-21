import { useState } from 'react'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { useParams } from 'react-router-dom'
import { generateShades } from '../utils/colors'
import '../styles/shades.css'

const ShadesPage: React.FC = () => {
  const [Format, setFormat] = useState<'hex' | 'rgb' | 'rgba'>('hex')
  const params = useParams()
  const { id, name, color } = params
  const { paletteName, colors } = generateShades(`${name}`, `#${color}`)

  const changeFormat = (e: any): void => { setFormat(e.target.value) }

  return (
    <div className="Shades" >
      <Navbar
        Type='shades'
        Name={paletteName}
        Format={Format}
        changeFormat={changeFormat}
        back={`/palettes/${id}`}
        isSlider={false}
      />
      <div className="shades-colors">
        {colors.map(c => <ColorBox
          key={c.hex}
          Type='shade'
          {...c}
          Format={Format}
        />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default ShadesPage
