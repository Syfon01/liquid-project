import React from 'react'

const HeaderAction = ({actionMemo, columnBtn}) => {
  return (
    <div className='flex'>
        <div className='mr-4'>
            {columnBtn}
        </div>
        <div>
            {actionMemo}
        </div>
    </div>
  )
}

export default HeaderAction