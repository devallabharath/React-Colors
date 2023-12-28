import { lazy, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FTHBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { rawPalette } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const TrashPage: React.FC<any> = ({ Storage }) => {
  const DelRef: React.MutableRefObject<any> = useRef()
  const DelAllRef: React.MutableRefObject<any> = useRef()
  const PageRef: React.MutableRefObject<any> = useRef()
  let Current: any[]
  const navigate = useNavigate()

  const render = () => {
    const Trash = Storage.getDeletedPalettes()
    return (
      <div className='Home'>
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
        {Trash.length !== 0 ? (
          <div ref={PageRef} className='home-palettes'>
            {Trash.map((p: rawPalette) => (
              <MiniPalette
                Type='Trash'
                key={p.id}
                Storage={Storage}
                palette={p}
                leftIconClick={restorePalette}
                rightIconClick={deleteDlg}
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

  const restorePalette = (id: string, ref: any): void => {
    Storage.restorePalette(id)
    ref.current.remove()
    if (PageRef.current.children.length === 0) window.location.reload()
  }

  const deleteDlg = (id: string, ref: any): void => {
    Current = [id, ref]
    DelRef.current.show()
  }

  const deletePalette = (): void => {
    Storage.deleteFromBin(Current[0])
    Current[1].current.remove()
    if (PageRef.current.children.length === 0) window.location.reload()
    DelRef.current.hide()
  }

  const clearTrash = (): void => {
    Storage.clearTrash()
    window.location.reload()
  }

  return render()
}

export default TrashPage
