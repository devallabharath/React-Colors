import { SlDrawer, SlMenuItem, SlIcon, SlBadge } from "@shoelace-style/shoelace/dist/react";
import "../styles/drawer.css"

const Drawer = (props) => {
  const render = () => {
    const { Display, Close, Contained, navigate, Storage } = props
    const smallScreen = window.innerWidth < 300
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
            {!smallScreen &&
              <SlMenuItem className="newbtn" onClick={() => navigate('/palettes/new')}>
                New Palette
                <SlIcon slot="suffix" name="plus-square-fill" />
              </SlMenuItem>
            }
            <SlMenuItem className="trashbtn" onClick={() => navigate('/trash')}>
              Trash Bin
              <SlIcon slot="suffix" name="trash-fill" />
              <SlBadge slot="suffix" variant="primary" pill>
                {Storage.deleted.length}
              </SlBadge>
            </SlMenuItem>
            <SlMenuItem className="hiddenbtn" onClick={() => navigate('/hidden')}>
              Hidden
              <SlIcon slot="suffix" name="eye-fill" />
              <SlBadge slot="suffix" variant="primary" pill>
              {Storage.hidden.length}
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
