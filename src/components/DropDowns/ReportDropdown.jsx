import { useNavigate } from "react-router-dom";

export function ReportDropdown() {

    const navigate = useNavigate();



    return (
      <>
        <div className="flex justify-center  flex-col inventoryDropdown dark:text-white border border-slate-700 ">
          <div className="hover:bg-slate-200 pl-5 dark:hover:bg-slate-700 hover:cursor-pointer p-2"  >Sales Report</div>
          <hr />
          <div className="hover:bg-slate-200 pl-5 dark:hover:bg-slate-700 hover:cursor-pointer p-2 " >Payments Report</div>
        </div>
      </>
    );
  }
  