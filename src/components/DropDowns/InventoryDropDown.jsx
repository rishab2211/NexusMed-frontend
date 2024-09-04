import { useNavigate } from "react-router-dom";

export function InventryDropdown() {

    const navigate = useNavigate();

    const goToListOfMedicines = ()=>{
        navigate("/inventory/ListOfMedicines")
    }

    const goToMedicineGroups = ()=>{
      navigate("/inventory/MedicineGroups");
    }


    return (
      <>
        <div className="flex justify-center  flex-col inventoryDropdown dark:text-white border border-slate-700 ">
          <div className="hover:bg-slate-200 dark:hover:bg-slate-700 pl-5 hover:cursor-pointer p-2" onClick={goToListOfMedicines} >List of Medicines</div>
          <hr />
          <div className="hover:bg-slate-200 dark:hover:bg-slate-700 pl-5 hover:cursor-pointer p-2 " onClick={goToMedicineGroups}>Medicine Groups</div>
        </div>
      </>
    );
  }
  