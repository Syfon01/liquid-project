import React, { useState } from 'react'
import dashboardCirlce from "../../assets/images/dashboard/circle.svg"
import Table from "../../components/Table/Index";
import ColumnButton from "../../components/shared/Button/ColumnBtn.jsx";
import { Columns } from "../../components/Table/Columns";
import myData from "../../components/Table/data";

const Index = () => {
  const [data, setData] = useState(myData)
  const [myTableColumns, setMyTableColumns] = useState(Columns);

  return (
    <>
      <div className="page-header">
            <h3 className="page-title">
              Dashboard </h3>
                    
      </div>
      <div className="row g-3">
            <div className="col-md-3 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body p-3">
                  <img src={dashboardCirlce} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-2">Loan <i className="material-icons float-end">money_off</i>
                  </h4>
                  <h2 className="mb-4">$ 15,0000</h2>
                  <h6 className="card-text">Increased by 60%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder text-white">
                <div className="card-body p-3">
                  <img src={dashboardCirlce} className="card-img-absolute" alt="insights" />
                  <h4 className="font-weight-normal mb-2">Investments 
                  
                  <span className="material-icons float-end">bookmark</span>
                  </h4>
                  <h2 className="mb-4">45,6334</h2>
                  <h6 className="card-text">Decreased by 10%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder text-white">
                <div className="card-body p-3">
                  <img src={dashboardCirlce} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-2">Borrowing
                  <span className="material-icons float-end">diamond</span>
                  </h4>
                  <h2 className="mb-4">95,5741</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 stretch-card grid-margin">
              <div className="card bg-gradient-primary card-img-holder text-white">
                <div className="card-body p-3">
                  <img src={dashboardCirlce} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-2">Users <i className="material-icons float-end">people</i>
                  </h4>
                  <h2 className="mb-4">741</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
      </div>

      <div>
        <Table
              data={data}
              columnBtn={
                <ColumnButton
                  // icon={ColumnIcon}
                  title={"Columns"}
                />
              }
              columns={myTableColumns}
              title={`All Transactions`}
              userCount={data.length}
              searchPlaceholder="Search transactions"
            />
    </div>

    </>

  )
}

export default Index