export function SideBarItem2({ fieldName, svg, onClickNav }) {
    return (
      <>
        <div className="flex items-center justify-between hover:bg-slate-200 hover:scale-105 dark:text-white rounded hover:cursor-pointer dark:hover:bg-slate-700" onClick={onClickNav}>
          <div className="flex items-center gap-2 pl-8 pt-2 pb-2 ">
            <div className="scale-150">{svg}</div>
            <div className="font-semibold">{fieldName}</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6 hover:scale-110"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
  