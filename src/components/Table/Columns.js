import React from "react";
import { NavLink } from "react-router-dom";

export const Columns = [
  {
    // id: 0,
    name: "First, Last Name ",
    cell: (row) => (
      <div className="flex items-center">
        {row.img && (
          <div className="mr-1.5">
            <img
              height="25px"
              width="25px"
              alt={row.firstName}
              src={`${row.img ? row.img : ""}`}
            />
          </div>
        )}

        <div>
          <span className="font-semibold">{`${row.firstname} ${row.lastname}`}</span>{" "}
          <br />
          <span className="">{`${row.country}`}</span>
        </div>
      </div>
    ),

    sortable: true,
    reorder: true,
    omit: false,
  },

  {
    name: "Phone Number",
    selector: (row) => (row.phone ? row.phone : ""),
    sortable: true,
    reorder: true,
    omit: false,
  },
  {
    name: "Email Address",
    selector: (row) => row.email,
    sortable: true,
    // right: true,
    reorder: true,
    omit: false,
  },

  {
    name: "Last Activity",
    selector: (row) => (row.last_activity ? row.last_activity : " "),
    sortable: true,
    // right: true,
    reorder: true,
    omit: false,
  },
  {
    name: "KYC Level",
    selector: (row) => (
      <div className="py-1">
        <span className="px-3 py-1 my-2 rounded-full bg-[#ECFDF3] text-[#027A48] font-medium flex items-center">
          <span>{row.kyc ? row.kyc : " "}</span>
        </span>
      </div>
    ),
    sortable: true,
    center: true,
    reorder: true,
    omit: false,
  },
  {
    name: " ",
    button: true,
    selector: (row) => (
      <NavLink
        to={`/customer/${row.id}`}
        className="font-medium btn font-sm view-btn"
        rel="noopener noreferrer"
      >
        View
      </NavLink>
    ),
    center: true,
    reorder: true,
    omit: false,
  },
];
