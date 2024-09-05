export function MainPart({ children, isSideBarOpen }) {
    return (
      <>
        <div
          className={`dark:text-white md:ml-64 p-4 flex gap-2 flex-col md:flex-row  mt-14 dark:bg-gray-800`}
        >
          {children}
        </div>
      </>
    );
  }
  