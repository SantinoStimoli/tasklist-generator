import { TextField } from '@mui/material'
import { Item } from '../interfaces/interfaces'

const CategoryItem = ({ item }: { item: Item }) => {
  console.log(item)

  return (
    <div className='grid grid-cols-5'>
      <TextField className='col-span-1' placeholder='😁' />
      <TextField className='col-span-4' placeholder='Título' />
    </div>
  )
}

export default CategoryItem
