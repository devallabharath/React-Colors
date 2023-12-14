import { useState } from 'react'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import { useParams, useNavigate } from 'react-router-dom'
import { generateShades } from '../utils/colors'
import '../styles/shades.css'

const ShadesPage = () => {
  const [Format, setFormat] = useState('hex')
  const navigate = useNavigate()
  const params = useParams()
  const {id, name, color} = params
  const { paletteName, colors } = generateShades(name, `#${color}`)

  return (
    <div className="Shades" >
      <Navbar
        Type='shades'
        Name={paletteName}
        Format={Format}
        changeFormat={(e)=>setFormat(e.target.value)}
        back={`/palettes/${id}`}
        navigate={navigate}
        slider={false}
      />
      <div className="shades-colors">
        {colors.map(c => <ColorBox key={c.hex} type='shade' {...c} format={Format} />)}
      </div>
      {/* footer */}
    </div>
  )
}

export default ShadesPage
