import React from "react";
import { GoPlus } from "react-icons/go";

function InventoryHeader() {
  return (
    <div className="flex justify-between p-2">
      <div>
        <div className="font-semibold text-xl">Inventory</div>
        <div>List of medicines for sales</div>
      </div>

      <button className="border border-slate-300 hover:bg-red-400 bg-red-500 p-2 rounded-md text-white flex items-center">
        <GoPlus /> Add New Item
      </button>
    </div>
  );
}

export default InventoryHeader;
