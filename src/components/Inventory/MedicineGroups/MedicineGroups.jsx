import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { medicineGroups } from "../../../constants/MedicineGroups";
function MedicineGroups() {
  return (
    <div className="flex flex-col gap-4" >
      <div className="flex justify-between items-center  p-2">
        <div className="flex flex-col gap-2">
          <div className="font-semibold items-center text-xl flex gap-1">
            <div className=" ">Inventory</div>
            <FaChevronRight />

            <div>Medicine Groups(50)</div>
          </div>
          <div>List of Medicines available for sales</div>
        </div>

        <button className="bg-red-500 hover:bg-red-400 text-white border border-slate-300 p-2 rounded-md">
          + Add New Item
        </button>
      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border dark:bg-slate-800 dark:text-white border-slate-300">
          <thead>
            <tr>
              <th className="w-1/12 px-2 py-1 border border-slate-300 ">#</th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Group Name
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                No of Medicines
              </th>
              <th className="w-1/3 px-2 py-1 border border-slate-300 ">
                Action
              </th>
              
            </tr>
          </thead>
          <tbody>
            {medicineGroups.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="px-2 py-1 border border-slate-300 ">
                  {index + 1}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["GroupName"]}
                </td>
                <td className="px-2 py-1 border border-slate-300 ">
                  {item["NoOfMedicines"]}
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

export default MedicineGroups;
