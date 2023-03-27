import React from "react";
import { NavLink } from "react-router-dom";

export const Columns = [
  {
    name: "S/N",
    selector: (row) => (row.id ? row.id : ""),
    sortable: true,
    reorder: true,
    omit: false,
    width:"5rem"
  },
  {
    name: "Reference",
    selector: (row) => (row.ref ? row.ref : ""),
    sortable: true,
    reorder: true,
    omit: false,
  },

  {
    name: "User",
    selector: (row) => (row.user ? row.user : ""),
    sortable: true,
    reorder: true,
    omit: false,
  },
  {
    name: "Amount",
    selector: (row) => (row.amount ? row.amount : ""),
    sortable: true,
    reorder: true,
    omit: false,
  },
  {
    name: "Description",
    cell: (row) => (
      <div className="flex items-center">
        <div>
          <span className="font-semibold">{`${row.description? row.description : " " }`}</span>{" "}
          <br />
          <span className="">{`${row.tag ? row.tag : " "}`}</span>
        </div>
      </div>
    ),

    minWidth: "12rem",
    sortable: true,
    // right: true,
    reorder: true,
    omit: false,
  },

  {
    name: "Date",
    selector: (row) => (row.date ? row.date : " "),
    sortable: true,
    // right: true,
    reorder: true,
    omit: false,
  },
  
  {
    name: " ",
    button: true,
    selector: (row) => (
      <NavLink
        to={`/${row.id}`}
        className="font-medium btn btn-outline-primary px-3 py-2"
        rel="noopener noreferrer"
      >
        View
      </NavLink>
    ),
    left:true ,
    reorder: true,
    omit: false,
  },
];
