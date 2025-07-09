import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1>راهنما جامع پرستاری</h1>
      <Link to="/lab">آزمایشات</Link>  
    </>
  )
}
