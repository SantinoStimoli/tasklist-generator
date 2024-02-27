import { useState } from 'react'
import Form from '../components/Form'
import { Category } from '../interfaces/interfaces'
import { Button } from '@mui/material'

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const addCategory = () => {
    setCategories([
      ...categories,
      {
        name: 'HOLA',
        emoji: '😊',
        items: []
      }
    ])
  }

  return (
    <main className='container mx-auto min-h-screen flex flex-col items-center py-10'>
      <h1 className='text-3xl uppercase font-bold'>Genera tu lista</h1>
      <Button
        className='flex items-center gap-3 text-lg font-semibold cursor-pointer !mt-3 !mb-3.5'
        onClick={addCategory}
        variant='contained'
      >
        <i className='bx bx-plus-circle bx-sm pt-1'></i>
        <p>Añadir categoría</p>
      </Button>
      <Form categories={categories} />
    </main>
  )
}

export default App
