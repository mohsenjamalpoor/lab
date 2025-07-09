import React from 'react'
import { Link } from 'react-router-dom'
import { FaFlask,FaClipboardList } from 'react-icons/fa';


export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center mb-5">راهنمای جامع پرستاری</h1>
      <div>
        <div className=" mr-2 flex items-center flex-row">
         <FaFlask size={20} color="text-[#4A90E2]" />
      <Link className="mr-1 text-[#366EBD] font-bold" to="/lab">آزمایشات</Link>  

        </div>
        <div className='mt-5 mr-2 flex items-center flex-row'>
           <FaClipboardList size={20} className="text-[#4A90E2]" />

      <Link  className="mr-1  text-[#366EBD] font-bold" to="/nursingdiagnosis">تشخیص های پرستاری</Link>  
        </div>

      </div>

    </>
  )
}
