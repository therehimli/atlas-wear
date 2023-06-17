import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { BiCode, BiHome, BiPhone } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'
import { GrBlog, GrHelp } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="text-center text-black dark:text-black lg:text-left bg-neutral-100">
      <div className="flex items-center justify-center border-b-[2px] border-neutral-200 border-solid dark:border-neutral-200 lg:justify-between"></div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="flex items-start justify-between px-20">
          <div className="w-[250px] h-[250px] flex flex-col items-center gap-5">
            <div className="rounded-full border-2 shadow-2xl w-[130px] h-[130px]">
              <img
                className="w-full h-full rounded-full"
                src="http://localhost:4000/uploads/images/atlas-logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Social networks
            </h6>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BsInstagram />
              <Link
                target="_blank"
                to="https://www.instagram.com/orkhanrahimli/"
                className="text-black text-[18px]"
              >
                Instagram
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <AiFillGithub />
              <Link
                target="_blank"
                to="https://github.com/therehimli"
                className="text-black text-[18px]"
              >
                GitHub
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BsLinkedin />
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/orkhan-rahimli-1b5a4b244/"
                className="text-black text-[18px]"
              >
                Linkedin
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BsTelegram />
              <Link
                target="_blank"
                to="https://t.me/orkhanrahimli"
                className="text-black text-[18px]"
              >
                Telegram
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BiCode />
              <Link
                target="_blank"
                to="https://github.com/therehimli/atlas-wear"
                className="text-black text-[18px]"
              >
                Source
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <FaHandshake />
              <Link
                target="_blank"
                to="mailto: orduxan144@gmail.com"
                className="text-black text-[18px]"
              >
                Cooperation
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <GrBlog />
              <Link target="_blank" to="#" className="text-black text-[18px]">
                Blog
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <GrHelp />
              <Link
                target="_blank"
                to="mailto: orduxan144@gmail.com"
                className="text-black text-[18px]"
              >
                Help
              </Link>
            </div>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BiHome size={20} />
              <Link target="_blank" to="#!" className="text-black text-[18px]">
                Orenburg, Russia
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <MdEmail size={20} />
              <Link
                target="_blank"
                to="mailto: orduxan144@gmail.com"
                className="text-black text-[18px]"
              >
                orduxan144@gmail.com
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BiPhone size={20} />
              <Link
                target="_blank"
                to="tel:994508797321"
                className="text-black text-[18px]"
              >
                +994 050 879 73 21
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-5 hover:underline">
              <BsWhatsapp />
              <Link
                target="_blank"
                to="https://wa.me/994508797321"
                className="text-black text-[18px]"
              >
                +994 050 879 73 21
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 text-center ">
        <span>© 2023 Atlas wear</span>
        <Link
          target="_blank"
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          to="https://tailwind-elements.com/"
        ></Link>
      </div>
    </div>
  )
}

export default Footer
