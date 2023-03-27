import React, { useMemo, useRef } from 'react';
import { useTable } from 'react-table';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useReactToPrint } from 'react-to-print';
// import { exportExcel } from 'react-export-excel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataTable({ data }) {
  const componentRef = useRef();
  
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );
  
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  const handleExport = () => {
    const excelData = rows.map(row => row.cells.map(cell => cell.value));
    const excelColumns = columns.map(column => column.Header);
    const fileName = 'data.xlsx';
    // exportExcel(excelColumns, excelData, fileName);
  };
  
  return (
    <div>
      <table {...getTableProps()} className="table table-striped table-bordered">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div className="mt-3">
        <CopyToClipboard text={JSON.stringify(data)}>
          <button className="btn btn-primary mr-2">Copy</button>
        </CopyToClipboard>
        <button className="btn btn-primary mr-2" onClick={handlePrint}>Print</button>
        <button className="btn btn-primary" onClick={handleExport}>Export</button>
      </div>
      
      <div style={{ display: 'none' }}>
        <table ref={componentRef} {...getTableProps()} className="table table-striped table-bordered">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
