import React from 'react'

const ColumnButton = ({open, icon, title}) => {
  return (
    <button
      className="flex items-center px-4 py-2.5 border border-[#D0D5DD] text-[#667085] rounded-[50px] text-sm"
      onClick={open}
    >
      {icon ? <img src={icon} className="mr-2" alt="export" srcSet="" /> : ''}
      {title}
    </button>
    
  )
}

export default ColumnButton