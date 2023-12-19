import { lazy, useRef, useState } from 'react'
import { useRefresh } from '../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { FTHBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const TrashPage: React.FC<any> = ({ Storage }) => {
  const DelRef: React.MutableRefObject<any> = useRef()
  const DelAllRef: React.MutableRefObject<any> = useRef()
  const PageRef: React.MutableRefObject<any> = useRef()
  const [Current, setCurrent] = useState(['', null])
  const Refresh = useRefresh()
  const navigate = useNavigate()

  const render = (): JSX.Element => {
    const Trash = Storage.getDeletedPalettes()
    return (<div className="Home">
      <Navbar Type='Trash' onBtnClick={() => DelAllRef.current.show()} isDrawer={false} />
      <YesNoDialog
        ref={DelRef}
        Label='Are you sure?'
        Content='This action will delete the palette permanently...'
        YesName='Delete'
        YesVariant='danger'
        Yes={deletePalette}
      />
      <YesNoDialog
        ref={DelAllRef}
        Label='Are you sure?'
        Content='This action will clear the Trash...'
        YesName='Delete'
        YesVariant='danger'
        Yes={clearTrash}
      />
      {Trash.length !== 0
        ? <div ref={PageRef} className="home-palettes">
          {Trash.map((p: rawPaletteType) => <MiniPalette
            Type="trash"
            key={p.id}
            Storage={Storage}
            palette={p}
            leftIconClick={restorePalette}
            rightIconClick={deleteDlg}
          />)}
        </div>
        : EmptyDiv()
      }
    </div>
    )
  }

  const EmptyDiv = (): any => {
    return (
      <div className="Empty">
        No palettes...
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    )
  }

  const restorePalette = (id: string, ref: any): void => {
    Storage.restorePalette(id)
    Refresh()
    // ref.current.remove()
    // if (PageRef.current.children.length === 0) PageRef.current.innerHTML = renderToString(EmptyDiv())
  }

  const deleteDlg = (id: string, ref: any): void => {
    setCurrent([id, ref])
    DelRef.current.show()
  }

  const deletePalette = (): void => {
    Storage.deleteFromBin(Current[0])
    Refresh()
  }

  const clearTrash = (): void => {
    Storage.clearTrash()
    Refresh()
  }

  return render()
}

export default TrashPage
