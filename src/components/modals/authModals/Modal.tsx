import { createPortal } from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import useToggleModalStore from '@/store/useModalToggle'

interface IModalProps {
  heading: string
  body: React.ReactNode
}

const portal = document.getElementById('portal') as HTMLDivElement

const Modal: React.FC<IModalProps> = ({ heading, body }) => {
  const toggleModal = useToggleModalStore()
  library.add(faX)

  return createPortal(
    <>
      <div className="justify-center items-center flex overflow-y-hidden fixed inset-0 z-50 focus:outline-none bg-neutral-800/80">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-[450px] my-6 mx-auto h-full lg:h-[700px] md:h-auto overflow-y-scroll no-scrollbar">
          <div className={`translate duration-300 h-full `}>
            <div className="translate h-full p-8  lg-h-auto md:h-auto border-0 rounded-[25px] shadow-lg relative flex gap-5 flex-col w-full bg-white focus:outline-none">
              <button
                onClick={() => toggleModal.toggleButton(0)}
                className="self-end"
              >
                <FontAwesomeIcon size="xl" icon={faX} />
              </button>
              <div className="text-[32px] font-bold">{heading}</div>
              <div>{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>,
    portal
  )
}
export default Modal
