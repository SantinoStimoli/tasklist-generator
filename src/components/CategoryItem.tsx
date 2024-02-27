import { TextField } from '@mui/material'
import { Item } from '../interfaces/interfaces'
import { useState } from 'react'

const CategoryItem = ({ item }: { item: Item }) => {
  const [emoji, setEmoji] = useState(item.emoji)
  const [name, setName] = useState(item.name)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (event.target.name === 'emoji') setEmoji(newValue)
    if (event.target.name === 'name') setName(newValue)
  }

  return (
    <div className='grid grid-cols-6 gap-1.5'>
      <div></div>
      <TextField
        required
        value={emoji}
        name='emoji'
        onChange={handleChange}
        className='col-span-1'
        placeholder='😁'
        inputProps={{ maxLength: 2 }}
      />
      <TextField
        required
        value={name}
        name='name'
        onChange={handleChange}
        className='col-span-3'
        placeholder='Título'
      />
      <i className='bx bx-trash bx-sm form-icons'></i>
    </div>
  )
}

export default CategoryItem
