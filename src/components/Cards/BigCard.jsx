export function BigCard({topLeft, topRight, centerLeft, centerRight, bottomLeft, bottomRight}) {
    return (
      <>
        <div className="w-456 h-140 border shadow-lg border-slate-400 rounded">
          <div className="flex justify-between rounded-t p-1  gap-2 border border-slate-400 ">
            <div className="font-bold text-lg pl-10">{topLeft}</div>
  
            <div className="pr-4">{topRight}</div>
          </div>
  
          <div className="flex p-2 gap-x-20  justify-between">
            <div className="pl-11">
              <div className="font-bold text-lg">{centerLeft}</div>
              <div className="font-semibold">{bottomLeft}</div>
            </div>
  
            <div className=" pr-4">
              <div className="font-bold text-lg">{centerRight}</div>
              <div className="font-semibold">{bottomRight}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  