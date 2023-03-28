import React, { useState } from "react";
import dashboardCirlce from "../../assets/images/dashboard/circle.svg";
import Table from "../../components/Table/Index";
import ColumnButton from "../../components/shared/Button/ColumnBtn.jsx";
import { Columns } from "../../components/Table/Columns";
import myData from "../../components/Table/data";
import DashboardCard from "../../components/shared/Cards/DashboardCard";

const Index = () => {
  const [data, setData] = useState(myData);
  const [myTableColumns, setMyTableColumns] = useState(Columns);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Dashboard </h3>
      </div>
      <div className="row g-3">
        <div className="col-md-3 stretch-card grid-margin">
          <DashboardCard
            bgColor="bg-gradient-danger"
            title="Loan"
            iconName="money_off"
            mainAmt="$ 15,0000"
            text="Increased by 60%"
          />
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <DashboardCard
            bgColor="bg-gradient-info"
            title="Investments"
            iconName="bookmark"
            mainAmt="45,6463"
            text="Decreased by 10%"
          />
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <DashboardCard
            bgColor="bg-gradient-success"
            title="Borrowing"
            iconName="diamond"
            mainAmt="95,453"
            text="Increased by 5%"
          />
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <DashboardCard
            bgColor="bg-gradient-primary"
            title="Users"
            iconName="people"
            mainAmt="743"
            text="Increased by 8%"
          />
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
  );
};

export default Index;
