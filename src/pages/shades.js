import { useState } from 'react'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { useParams } from 'react-router-dom'
import { generateShades } from '../utils/colors'
import '../styles/shades.css'

const ShadesPage = () => {
  const [Format, setFormat] = useState('hex')
  const params = useParams()
  const { id, name, color } = params
  const { paletteName, colors } = generateShades(name, `#${color}`)

  return (
    <div className="Shades" >
      <Navbar
        Type='shades'
        Name={paletteName}
        Format={Format}
        changeFormat={(e) => setFormat(e.target.value)}
        back={`/palettes/${id}`}
        isSlider={false}
      />
      <div className="shades-colors">
        {colors.map(c => <ColorBox
          key={c.hex}
          Type='shade'
          Format={Format}
          Name={c.name}
          HEX={c.hex}
          RGB={c.rgb}
          RGBA={c.rgba}
        />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default ShadesPage
