import React from 'react'

const HeaderTitle = ({title,userCount, countTitle}) => {
  return (
    <div className='d-flex items-center'>
        <h4>
            {title}
        </h4>
        
        {userCount > 0 && 
            <h4 className='ms-1 fw-medium text-secondary py-0.5 px-2'>
            
               ({userCount > 1 ?
                    <span>
                        {userCount} 
                        <span>{countTitle}</span>
                    </span>
                    : 
                    <span>
                        {userCount} 
                        <span>{countTitle}</span>
                    </span>
                })
            </h4>
        }

    </div>
  )
}

export default HeaderTitle