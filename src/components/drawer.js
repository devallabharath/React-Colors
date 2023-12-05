import { useEffect, useState } from 'react'
import { SlDrawer } from "@shoelace-style/shoelace/dist/react";

const Drawer = (props) => {
  const [Always, setAlways] = useState(window.innerWidth > 1360)

  useEffect(() => {
    function change () {setAlways(window.innerWidth > 1360)}
    window.addEventListener('resize', change)
    return () => window.removeEventListener('resize', change)
  }, [])

  const render = () => {
    const { Display, Close } = props
    return (
      <SlDrawer
        className='Drawer'
        label="Menu"
        placement="start"
        open={Always ? true : Display}
        onSlAfterHide={Close}
        contained={Always}
      >
        This is the sidebar
      </SlDrawer>
    )
  }

  return render()
}

export default Drawer
