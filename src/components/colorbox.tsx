import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';
import chroma from 'chroma-js';
import '../styles/colorbox.css'
import { colorBox } from '../utils/types';

const ColorBox: colorBox = (props) => {
    const dynamicColor = chroma(props.hex).luminance() > 0.4
      ? ['black', '#ffffff55']
      : ['white', '#00000055']
    const fg = dynamicColor[0]
    const bg = dynamicColor[1]

  const render = () => {
    const { Type, Format, Id, name, hex } = props
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton style={{ color: fg }} className="copy-button" value={props[Format]} />
        <span style={{ color: fg }} className="color-value">{props[Format]}</span>
        {Type === 'color' && Id
          ? <Link to={`/?mode=shades&id=${Id}&name=${name.slice(0, -4)}&color=${hex.replace('#', '')}`}>
            <SlTooltip content="See More">
              {details(name, true)}
            </SlTooltip>
          </Link>
          : details(name, false)
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
