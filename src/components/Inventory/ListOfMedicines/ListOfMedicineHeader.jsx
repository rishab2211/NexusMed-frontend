import React from "react";
import InventoryHeader from "../InventoryHeader";
import { FaChevronRight } from "react-icons/fa";
let number = 298;

function ListOfMedicineHeader() {
  return (
    <div className="flex justify-between items-center  p-2">
      <div className="flex flex-col gap-2">
        <div className="font-semibold items-center text-xl flex gap-1">
          <div className=" ">Inventory</div>
          <FaChevronRight />

          <div>List of Medicines({number})</div>
        </div>
        <div>List of Medicines available for sales</div>
      </div>

      <button className="bg-red-500 hover:bg-red-400 text-white border border-slate-300 p-2 rounded-md">
        + Add New Item
      </button>
    </div>
  );
}

export default ListOfMedicineHeader;
