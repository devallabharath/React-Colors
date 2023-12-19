import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';
import chroma from 'chroma-js';
import '../styles/colorbox.css'

interface propsType {
  Type: string
  Id: string
  [Format: string]: string
  Name: string
  HEX: string
  RGB: string
  RGBA: string
}

const ColorBox: React.FC<propsType> = (props) => {
    const dynamicColor = chroma(props.HEX).luminance() > 0.4
      ? ['black', '#ffffff55']
      : ['white', '#00000055']
    const fg = dynamicColor[0]
    const bg = dynamicColor[1]

  const render = () => {
    const { Type, Format, Id, Name, HEX } = props
    return (
      <div style={{ background: HEX }} className="ColorBox">
        <SlCopyButton style={{ color: fg }} className="copy-button" value={props[Format]} />
        <span style={{ color: fg }} className="color-value">{props[Format]}</span>
        {Type === 'color'
          ? <Link to={`/palettes/${Id}/${Name.slice(0, -4)}/${HEX.replace('#', '')}`}>
            <SlTooltip content="See More">
              {details(Name, true)}
            </SlTooltip>
          </Link>
          : details(Name, false)
        }
      </div>
    )
  }

  const details = (name: string, icon: boolean) => {
    return (
      <div className='details' style={{ color: fg, background: bg }}>
        <span className='color-name'>{name}</span>
        {icon && <SlIcon className='caret' name="caret-right-fill" />}
      </div>
    )
  }

  return render()
}

export default ColorBox
