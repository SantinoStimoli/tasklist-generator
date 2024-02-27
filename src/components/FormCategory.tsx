import { TextField } from '@mui/material'
import { Category } from '../interfaces/interfaces'
import { useState } from 'react'

const FormCategory = ({ element }: { element: Category }) => {
  const [emoji, setEmoji] = useState('')
  const [name, setName] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (event.target.name === 'emoji') setEmoji(newValue)
    if (event.target.name === 'name') setName(newValue)
  }

  console.log(element)

  return (
    <div>
      <div className='grid grid-cols-5 gap-1.5'>
        <TextField
          name='emoji'
          value={emoji}
          onChange={handleChange}
          className='col-span-1'
          placeholder='😊'
          inputProps={{ maxLength: 2 }}
        />
        <TextField
          name='name'
          value={name}
          onChange={handleChange}
          className='col-span-3'
          placeholder='Categoría'
        />
        <i className='bx bx-plus bx-md col-span-1 border border-black/20 hover:border-black rounded flex justify-center items-center cursor-pointer'></i>
      </div>
    </div>
  )
}

export default FormCategory
