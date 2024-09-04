import { BigCard } from "../Cards/BigCard";

export function BigCardSection(){

    return(
        <>
            <div className="flex w-full justify-around flex-wrap  gap-4">
                <BigCard topLeft={"inventory"} topRight={"Go to Configuration"} centerLeft={"298"} centerRight={"24"} bottomLeft={"Total no. of Medicines"} bottomRight={"Medicine Groups"} />
                <BigCard topLeft={"Quick Report"} topRight={"January 2022"} centerLeft={"70,856"} centerRight={"5,288"} bottomLeft={"Qty of Medicines Sold"} bottomRight={"Invoices Generated"} />
                <BigCard topLeft={"My Pharmacy"} topRight={"Go to User Management"} centerLeft={"04"} centerRight={"05"} bottomLeft={"Total no. of Suppliers"} bottomRight={"Total number of groups"} />
                <BigCard topLeft={"Customers"} topRight={"Go to Customer page"} centerLeft={"845"} centerRight={"Soframycin"} bottomLeft={"Total no. of Customers"} bottomRight={"Frequently bought Item"} />
            </div>
        </>
    )
}