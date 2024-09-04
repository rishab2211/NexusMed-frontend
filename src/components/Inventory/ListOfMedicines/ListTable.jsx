import React from "react";
import { listOfMedicines } from "../../../constants/ListOfMedicines";

function ListTable() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-slate-800 dark:text-white border border-slate-300  ">
          <thead>
            <tr>
              <th className="w-1/12 px-2 py-1 border border-slate-300 ">#</th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Medicine Name
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Medicine ID
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Group Name
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Stock in Qty
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listOfMedicines.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="px-2 py-1 border border-slate-300 ">
                  {index + 1}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["Medicine Name"]}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["Medicine ID"]}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["Group Name"]}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["Stock in Qty"]}
                </td>
                <button>
                  <td className="px-2 py-1 font-semibold ">{item["Action"]}</td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTable;
