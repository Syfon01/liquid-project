import React from 'react'
import dashboardCirlce from "../../../assets/images/dashboard/circle.svg"

const DashboardCard = ({bgColor,title,iconName,mainAmt,text}) => {
  return (
    <>
      <div className={`card ${bgColor} card-img-holder text-white`}>
        <div className="card-body p-3">
          <img src={dashboardCirlce} className="card-img-absolute" alt="circle" />
          <h4 className="font-weight-normal mb-2">{title} <i className="material-icons float-end">{iconName}</i>
          </h4>
          <h2 className="mb-4">{mainAmt}</h2>
          <h6 className="card-text">{text}</h6>
        </div>
      </div>
    </>
  )
}

export default DashboardCard