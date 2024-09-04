export function SideBarItem3({ fieldName, svg, onClickNav }) {
    
    let number =0;
    return (
      <>
        <div className="flex items-center justify-between hover:bg-slate-200 dark:text-white rounded hover:cursor-pointer hover:scale-105 dark:hover:bg-slate-700" onClick={onClickNav}>
          <div className="flex items-center gap-2 pl-8 pt-2 pb-2 ">
            <div className="scale-150">{svg}</div>
            <div className="font-semibold">{fieldName}</div>
          </div>
          <div className="mr-2 w-5 h-6 bg-red-500 text-center rounded-full" >
            {number}
          </div>
        </div>
      </>
    );
  }
  