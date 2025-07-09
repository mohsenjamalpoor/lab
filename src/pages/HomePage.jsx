import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">راهنما جامع پرستاری</h1>
      <div>
        <div>
      <Link to="/lab">آزمایشات</Link>  

        </div>
        <div>

      <Link to="/nursingdiagnosis">تشخیص های پرستاری</Link>  
        </div>

      </div>

    </>
  )
}
