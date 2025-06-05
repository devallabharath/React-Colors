import { lazy, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FTHBar as Navbar } from '../components/navbar'
import { storageContext } from '../utils/storage'
import { YesNoDialog } from '../components/dialog'
import { component, dialogRef, rawPalette } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const HiddenPage: component<any> = () => {
  const PageRef: any = useRef()
  const DlgRef: dialogRef = useRef()
  const navigate = useNavigate()
  const Storage = useContext(storageContext)

  const render = () => {
    const Hidden = Storage.getHiddenPalettes()
    return (
      <div className='Home'>
        <Navbar Type='Hidden' onBtnClick={showDlg} isDrawer={false} />
        <YesNoDialog
          ref={DlgRef}
          Label='Are you sure?'
          Content='This action will move all the palette to home...'
          YesName='Show All'
          YesVariant='primary'
          Yes={showAll}
        />
        {Hidden.length !== 0 ? (
          <div ref={PageRef} className='home-palettes'>
            {Hidden.map((p: rawPalette) => (
              <MiniPalette
                Type='Hidden'
                key={p.id}
                palette={p}
                rightIconClick={showPalette}
              />
            ))}
          </div>
        ) : (
          <div className='Empty'>
            No palettes...
            <Button onClick={() => navigate('/')}>Go Home</Button>
          </div>
        )}
      </div>
    )
  }

  const showPalette = (id: string, ref: React.MutableRefObject<any>): void => {
    Storage.showPalette(id)
    ref.current.remove()
    if (PageRef.current.children.length === 0) window.location.reload()
  }

  const showDlg = (): void => {
    if (Storage.hidden.length === 0) return
    DlgRef.current?.show()
  }

  const showAll = (): void => {
    Storage.showAllPalettes()
    window.location.reload()
  }

  return render()
}

export default HiddenPage
