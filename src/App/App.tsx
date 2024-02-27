import { useEffect, useState } from 'react'
import Form from '../components/Form'
import { Category } from '../interfaces/interfaces'

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const addCategory = () => {
    const newCategory: Category = {
      name: '',
      emoji: '',
      items: []
    }

    setCategories([...categories, newCategory])
  }

  useEffect(() => {
    console.log(categories)
  }, [categories])

  return (
    <main className='container mx-auto h-screen flex flex-col justify-center items-center bg-red-500'>
      <h1 className='text-3xl uppercase font-bold mb-3'>Genera tu lista</h1>
      <span
        className='flex items-center gap-3 text-lg font-semibold cursor-pointer'
        onClick={addCategory}
      >
        <i className='bx bx-plus-circle bx-sm pt-1'></i>
        <p>Añadir categoría</p>
      </span>
      <Form categories={categories} />
    </main>
  )
}

export default App
