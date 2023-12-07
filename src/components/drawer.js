import { SlDrawer } from "@shoelace-style/shoelace/dist/react";

const Drawer = (props) => {
  const render = () => {
    const { Display, Close, Contained } = props
    return (
      <SlDrawer
        className='Drawer'
        label="Menu"
        placement="start"
        open={Display}
        onSlAfterHide={Close}
        contained={Contained}
        noHeader
      >
        This is the sidebar
      </SlDrawer>
    )
  }

  return render()
}

export default Drawer
