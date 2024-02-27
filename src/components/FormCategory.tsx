import { TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { categoryOptionsContext } from '../App/App'
import { Category } from '../interfaces/interfaces'

const FormCategory = ({ category }: { category: Category }) => {
  const [emoji, setEmoji] = useState(category.emoji)
  const [name, setName] = useState(category.name)

  const categoryOptions = useContext(categoryOptionsContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (event.target.name === 'emoji') setEmoji(newValue)
    if (event.target.name === 'name') setName(newValue)
  }

  useEffect(() => {
    categoryOptions?.updateCategory(category.id, name, emoji)
  }, [category.id, emoji, name, categoryOptions])

  return (
    <div>
      <div className='grid grid-cols-6 gap-1.5'>
        <TextField
          required
          value={emoji}
          name='emoji'
          onChange={handleChange}
          className='col-span-1'
          placeholder='😊'
          inputProps={{ maxLength: 2 }}
        />
        <TextField
          required
          value={name}
          name='name'
          onChange={handleChange}
          className='col-span-3'
          placeholder='Categoría'
        />
        <i className='bx bx-plus bx-sm form-icons'></i>
        <i
          className='bx bx-trash bx-sm form-icons '
          onClick={() => categoryOptions?.deleteCategory(category.id)}
        ></i>
      </div>
    </div>
  )
}

export default FormCategory
