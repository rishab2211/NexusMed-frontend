import React from "react";
import { Card } from "../Cards/Card";
function InventoryCards() {
  return (
    <div className=" h-screen " >
      <div className="text-center flex flex-wrap gap-4 justify-around">
        <Card
          svg={
            <svg viewBox="0 0 512 512" fill="#38bdf8" height="80" width="80">
              <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48z" />
            </svg>
          }
          color={"#38bdf8"}
          bigText={"298"}
          centerText={"Medicines Available"}
          lowerText={"View Full List"}
        />

        <Card
          svg={
            <svg viewBox="0 0 512 512" fill="#34d399" height="80" width="80">
              <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48z" />
            </svg>
          }
          color={"#34d399"}
          bigText={"02"}
          centerText={"Medicines Groups"}
          lowerText={"View Groups"}
        />

        <Card
          svg={
            <svg viewBox="0 0 1024 1024" fill="#f43f5e" height="80" width="80">
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
  );
}

export default InventoryCards;
