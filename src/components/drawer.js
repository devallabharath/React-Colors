import { SlDrawer, SlMenuItem, SlIcon, SlBadge } from "@shoelace-style/shoelace/dist/react";
import "../styles/drawer.css"
import { useNavigate } from "react-router-dom";

const Drawer = (props) => {
  const navigate = useNavigate()
  const render = () => {
    const { Display, Close, Contained, Count } = props
    return (
      <SlDrawer
        noHeader
        className='Drawer'
        label="Menu"
        placement="start"
        open={Display}
        onSlAfterHide={Close}
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
              <SlBadge slot="prefix" variant="primary" pill>
              {Count[0]}
              </SlBadge>
            </SlMenuItem>
            <SlMenuItem className="hiddenbtn" onClick={() => navigate('/favourites')}>
              Favourites
              <SlIcon slot="suffix" name="heart-fill" />
              <SlBadge slot="prefix" variant="primary" pill>
              {Count[1]}
              </SlBadge>
            </SlMenuItem>
            <SlMenuItem className="trashbtn" onClick={() => navigate('/trash')}>
              Trash Bin
              <SlIcon slot="suffix" name="trash-fill" />
              <SlBadge slot="prefix" variant="primary" pill>
                {Count[2]}
              </SlBadge>
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
  }

  return render()
}

export default Drawer
