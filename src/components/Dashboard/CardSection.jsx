import { useState } from "react";
import { Card } from "../Cards/Card";
import { DropDownDownloads } from "../DropDowns/DropDownDownloads";


export function CardSection() {

    


  const [toggleDownload,setToggleDownload] = useState(false);



  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-2xl">Dashboard</div>
            <div>a quick data overview of inventory</div>
          </div>
          <button className="flex border p-1 shadow-md hover:bg-slate-200  border-gray-400 rounded  " onClick={()=>setToggleDownload((prev)=>(!prev))} >
            <div className="font-semibold">Download Report</div>
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
          </button>

          
        </div>
        {toggleDownload && (<DropDownDownloads/>)}
        

        <div className="flex flex-wrap md:flex-row shrink-0 gap-2 md:gap-6 w-full m-2 p-2 justify-around ">
          <Card
            svg={
              <svg viewBox="0 0 384 512" fill="#86efac" height="80" width="80">
                <path d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zm-96 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48z" />
              </svg>
            }
            color={"#86efac"}
            bigText={"Good"}
            centerText={"Inventory Status"}
            lowerText={"View Detailed Report"}
          />
          <Card
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fcd34d"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            }
            color={"#fcd34d"}
            bigText={"Rs. 8,55,875"}
            centerText={"Revenue: Jan 2022"}
            lowerText={"View Detailed Report"}
          />
          <Card
            svg={
              <svg viewBox="0 0 512 512" fill="#38bdf8" height="80" width="80">
                <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48z" />
              </svg>
            }
            color={"#38bdf8"}
            bigText={"298"}
            centerText={"Medicines Available"}
            lowerText={"Visit Inventory"}
          />
          <Card
            svg={
              <svg
                viewBox="0 0 1024 1024"
                fill="#f43f5e"
                height="80"
                width="80"
              >
                <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" />
              </svg>
            }
            color={"#f43f5e"}
            bigText={"01"}
            centerText={"Medicine Shortage"}
            lowerText={"Resolve Now"}
          />
        </div>
      </div>
    </>
  );
}
