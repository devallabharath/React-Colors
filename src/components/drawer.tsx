import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { SlDrawer, SlMenuItem, SlIcon } from "@shoelace-style/shoelace/dist/react";
import "../styles/drawer.css"

interface drawerPropsType { Contained: boolean }

const Drawer = forwardRef((props: drawerPropsType, ref: any): JSX.Element => {
  const navigate = useNavigate()
  const { Contained } = props

  return (
    <SlDrawer
      ref={ref}
      noHeader
      className='Drawer'
      label="Menu"
      placement="start"
      open={window.innerWidth > 1280}
      onSlAfterHide={() => ref.current.hide()}
      contained={Contained}
    >
      <div className="Menu">
        <div className="Menu-top">
          <SlMenuItem className="newbtn" onClick={() => navigate('/palettes/new')}>
            New Palette
            <SlIcon slot="suffix" name="plus-square-fill" />
          </SlMenuItem>
          <SlMenuItem className="hiddenbtn" onClick={() => navigate('/hidden')}>
            Hidden
            <SlIcon slot="suffix" name="eye-slash-fill" />
          </SlMenuItem>
          <SlMenuItem className="hiddenbtn" onClick={() => navigate('/favourites')}>
            Favourites
            <SlIcon slot="suffix" name="heart-fill" />
          </SlMenuItem>
          <SlMenuItem className="trashbtn" onClick={() => navigate('/trash')}>
            Trash Bin
            <SlIcon slot="suffix" name="trash-fill" />
          </SlMenuItem>
        </div>
        <div className="Menu-bottom">
          <SlMenuItem className="config">
            Settings
            <SlIcon slot="suffix" name="gear-fill" />
          </SlMenuItem>
        </div>
      </div>
    </SlDrawer>
  )
})

export default Drawer
