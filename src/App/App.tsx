/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import { Category } from '../interfaces/interfaces'
import { Button } from '@mui/material'

export const categoryOptionsContext = createContext<null | {
  updateCategory: (id: number, newName: string, newEmoji: string) => void
  deleteCategory: (id: number) => void
}>(null)

const App = () => {
  const [newId, setNewId] = useState(1)
  const [categories, setCategories] = useState<Category[]>([])

  const newCategory = {
    id: newId,
    emoji: '🐐',
    name: 'LACABRA',
    items: [
      {
        emoji: '🐐',
        name: 'LACABRA'
      }
    ]
  }

  const addCategory = () => {
    setCategories([...categories, newCategory])
    setNewId(newId + 1)
  }

  const updateCategory = (id: number, newName: string, newEmoji: string) => {
    setCategories(prevCategories => {
      return prevCategories.map(category => {
        if (category.id === id) {
          return { ...category, name: newName, emoji: newEmoji }
        }
        return category
      })
    })
  }

  const deleteCategory = (id: number) => {
    setCategories(prevCategories => {
      return prevCategories
        .map(category => {
          if (category.id === id) {
            return null
          }
          return category
        })
        .filter(category => category !== null) as Category[]
    })
  }

  useEffect(() => addCategory(), [])

  return (
    <categoryOptionsContext.Provider value={{ updateCategory, deleteCategory }}>
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
    </categoryOptionsContext.Provider>
  )
}

export default App
