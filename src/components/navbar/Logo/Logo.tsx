import { memo } from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'

const Logo = memo(() => {
  return (
    <Link to="/">
      <h1 className="font-bold text-[45px]">Atlas wear</h1>
    </Link>
  )
})

export default Logo
