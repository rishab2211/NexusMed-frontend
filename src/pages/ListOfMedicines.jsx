import React from 'react'
import ListOfMedicineHeader from '../components/Inventory/ListOfMedicines/ListOfMedicineHeader'
import FilterBar from '../components/Inventory/ListOfMedicines/FilterBar'
import ListTable from '../components/Inventory/ListOfMedicines/ListTable'
import { useState } from 'react'
import { listOfMedicines } from '../constants/ListOfMedicines'
function ListOfMedicines() {

  const [searchTerm, setSearchTerm] = useState('');

  // const filteredMedicines = listOfMedicines.filter((medicine) =>
  //   medicine["Medicine Name"].toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredMedicines = listOfMedicines.filter((medicine) => {
    const searchTermLower = searchTerm.toLowerCase();
    return Object.values(medicine).some(
      (value) => 
        typeof value === 'string' && value.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className='flex flex-col gap-4'>
    <ListOfMedicineHeader/>
    <FilterBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    <ListTable filteredMedicines={filteredMedicines} />
    </div>
  )
}

export default ListOfMedicines