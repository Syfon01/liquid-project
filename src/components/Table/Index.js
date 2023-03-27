import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import SortIcon from "../../assets/images/my-img/sort.svg";
import SearchTable from "./SearchTable";
import DatePicker from "./DatePicker";
import ExportBtn from "../shared/Button/ExportBtn.jsx";
import HeaderTitle from "./HeaderTitle";
import HeaderAction from "./HeaderAction";
const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
    },
  },
};

const Index = ({ data, title, searchPlaceholder, columns, userCount, countTitle, columnBtn }) => {
  const [searchVal, setSearchVal] = useState("");

  const search = (rows) => {
    return rows?.filter(
      (row) =>
        JSON.stringify(row).toLowerCase().indexOf(searchVal?.toLowerCase()) !== -1 
        // row.lastName?.toLowerCase().indexOf(searchVal?.toLowerCase()) !== -1
    );
  };




  function downloadCSV(tableArray) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(tableArray);
    if (csv == null) return;

    const filename = `${title}.csv`;

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  function convertArrayOfObjectsToCSV(myArray) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(myArray[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    myArray.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

const actionsMemo = useMemo(() => <ExportBtn onExport={() => downloadCSV(data)} />, []);
  
  return (
    <>
    <div className="bg-white p-3">
    <div className="">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            width: "100%",
            marginBottom: "10px",
            flexWrap:"wrap",
          }}
          className="space-y-2"
        >
          
          <div className="w-100%" style={{width:"300px"}}>
            <SearchTable
              SearchTable={(e) => setSearchVal(e.target.value)}
              filteredText={searchVal}
              placeholder={searchPlaceholder}
            />
          </div>
          <div className="d-flex items-center">
            <div className="mr-3">
              {/* <DatePicker /> */}
            </div>
            {/* <p>Filter</p> */}
          </div>
        </div>
      </div>

      <div className="table">
        <DataTable
          className=""
          responsive
          striped
          highlightOnHover
          title={<HeaderTitle title={title} userCount={userCount} countTitle={countTitle}/>}
          actions={<HeaderAction actionMemo={actionsMemo} />}
          columns={columns}
          data={search(data)}
          defaultSortFieldId={1}
          sortIcon={<img src={SortIcon} alt="sortIcon" />}
          pagination
          selectableRows
          customStyles={customStyles}
        />
      </div>
    </div>
      
    </>
  );
};

export default Index;
