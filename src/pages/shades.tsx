import { useState } from 'react'
import { ColorBar as Navbar } from '../components/navbar'
import ColorBox from '../components/colorbox'
import { useSearchParams } from 'react-router-dom'
import { generateShades } from '../utils/colors'
import '../styles/shades.css'

const ShadesPage: React.FC = () => {
  const [Format, setFormat] = useState<'hex' | 'rgb' | 'rgba'>('hex')
  const [params] = useSearchParams()
  const id = params.get('id')
  const name = params.get('name')
  const color = params.get('color')
  const { paletteName, colors } = generateShades(`${name}`, `#${color}`)

  const changeFormat = (e: any): void => { setFormat(e.target.value) }

  return (
    <div className="Shades" >
      <Navbar
        Type='shades'
        Name={paletteName}
        Format={Format}
        changeFormat={changeFormat}
        back={`/?mode=palette&id=${id}`}
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
