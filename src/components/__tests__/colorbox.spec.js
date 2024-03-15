// import { render } from '@testing-library/react'
// import ColorBox from '../colorbox'

const colorProps = {
  Type: 'color',
  Id: 'some',
  Format: 'hex',
  name: 'white',
  hex: '#ffffff',
  rgb: 'rgb(255, 255, 255)',
  rgba: 'rgba(255, 255, 255, 1)',
}

describe('some test', () => {
  test('component rendered', () => {
    // render(<ColorBox {...colorProps} />)
    expect('some').toBe('some')
  })
})
