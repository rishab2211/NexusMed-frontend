export function Card({ svg, color, bigText, centerText, lowerText }) {
    return (
      <div
        style={{ borderColor: color }}
        className="text-center shadow-lg rounded border  border-2 w-52 h-38"
  
      >
        <div>
          <div className="m-4 flex justify-center">{svg}</div>
          <div className="font-bold text-xl m-2">{bigText}</div>
          <div className="font-semibold m-1">{centerText}</div>
        </div>
        <div
          style={{ backgroundColor: color, borderColor: color }}
          className="flex gap-2 border whitespace-nowrap md:pl-8 pl-6 pr-6 md:pr-8 pt-2 pb-2"
        >
          <div>{lowerText}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
  