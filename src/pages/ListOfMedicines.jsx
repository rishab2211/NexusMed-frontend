import React from 'react'
import ListOfMedicineHeader from '../components/Inventory/ListOfMedicines/ListOfMedicineHeader'
import FilterBar from '../components/Inventory/ListOfMedicines/FilterBar'
import ListTable from '../components/Inventory/ListOfMedicines/ListTable'

function ListOfMedicines() {
  return (
    <div className='flex flex-col gap-4'>
    <ListOfMedicineHeader/>
    <FilterBar/>
    <ListTable/>
    </div>
  )
}

export default ListOfMedicines