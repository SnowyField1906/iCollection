import Arrow from "./components/Arrow"
import Facebook from "./components/Facebook"
import Twitter from "./components/Twitter"
import Github from "./components/Github"
import Linkedin from "./components/Linkedin"
import Wakatime from "./components/Wakatime"

import DatePicker from "tailwind-datepicker-react"
import { useState } from "react"
function Footer() {
  const [show, setShow] = useState(false)
  const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
  }
  return (
    <div className='flex h-40 bg-white/40 dark:bg-black/40 mt-20 border-t-2 border-black/30 dark:border-white/30'>
      <div className="flex mx-auto w-11/12 h-full place-items-center justify-items-center justify-around">
        <div className="flex place-items-center text-huge font-light whitespace-nowrap">Keep in touch with @SnowyField1906</div>
        <div className="flex justify-around w-full h-[40px] ">
          <a className="cursor-pointer flex place-items-center justify-items-center hover:fill-gray-500"
            href="https://github.com/SnowyField1906" target="_blank">
            <Github />
            <p className="text-huge text-lg font-light ml-5 mr-10">SnowyField1906</p>
          </a>
          <a className="cursor-pointer flex place-items-center justify-items-center hover:fill-gray-500"
            href="https://linkedin.com/in/NHThuan" target="_blank">
            <Linkedin />
            <p className="text-huge text-lg font-light ml-5 mr-10">NHThuan</p>
          </a>
          <a className="cursor-pointer flex place-items-center justify-items-center hover:fill-gray-500"
            href="https://wakatime.com/SnowyField1906" target="_blank">
            <Wakatime />
            <p className="text-huge text-lg font-light ml-5 mr-10">SnowyField1906</p>
          </a>
          <a className="cursor-pointer flex place-items-center justify-items-center hover:fill-gray-500"
            href="https://facebook.com/trantieuvann" target="_blank">
            <Facebook />
            <p className="text-huge text-lg font-light ml-5 mr-10">trantieuvann</p>
          </a>
          <a className="cursor-pointer flex place-items-center justify-items-center hover:fill-gray-500"
            href="https://twitter.com/27Euterpe" target="_blank">
            <Twitter />
            <p className="text-huge text-lg font-light ml-5 mr-10">27Euterpe</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
