export function SideBarItem1({ fieldName, svg, onClickNav }) {
    return (
      <>
        <div className="flex items-center pl-8 pt-2 pb-2 rounded gap-2 hover:cursor-pointer hover:scale-105 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700" onClick={onClickNav}>
          <div className="scale-150" >{svg}</div>
          <div className="font-semibold">{fieldName}</div>
          
        </div>
      </>
    );
  }
  