import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center mb-5">راهنما جامع پرستاری</h1>
      <div>
        <div>
      <Link className="mr-2 text-[#366EBD] font-bold" to="/lab">آزمایشات</Link>  

        </div>
        <div>

      <Link  className="mr-2 text-[#366EBD] font-bold" to="/nursingdiagnosis">تشخیص های پرستاری</Link>  
        </div>

      </div>

    </>
  )
}
