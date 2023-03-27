import React from 'react'

const HeaderTitle = ({title,userCount, countTitle}) => {
  return (
    <div className='d-flex items-center'>
        <h4>
            {title}
        </h4>
        
        {userCount > 0 && 
            <div className='ms-2 text-xs fw-medium rounded-[50px] text-secondary py-0.5 px-2'>
            
               ({userCount > 1 ?
                    <span>
                        {userCount} 
                        <span className='ml-0.5'>{countTitle}</span>
                    </span>
                    : 
                    <span>
                        {userCount} 
                        <span className='ml-0.5'>{countTitle}</span>
                    </span>
                })
            </div>
        }

    </div>
  )
}

export default HeaderTitle