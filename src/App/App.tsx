/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import { Category } from '../interfaces/interfaces'
import { Button } from '@mui/material'

export const categoryOptionsContext = createContext<null | {
  updateCategory: (id: number, newName: string, newEmoji: string) => void
  deleteCategory: (id: number) => void
  addItemToCategory: (categoryId: number) => void
  updateItemFromCategory: (
    categoryId: number,
    itemId: number,
    newName: string,
    newEmoji: string
  ) => void
  deleteItemFromCategory: (categoryId: number, itemId: number) => void
}>(null)

const App = () => {
  const [newCategoryId, setNewCategoryId] = useState(0)
  const [newItemId, setNewItemId] = useState(1)
  const [categories, setCategories] = useState<Category[]>([])

  const newCategory = {
    id: newCategoryId,
    emoji: '🐐',
    name: 'LACABRA',
    items: [
      {
        id: 33,
        emoji: '🐐',
        name: 'sss'
      },
      {
        id: 33 + 1,
        emoji: '🐐',
        name: '2222'
      }
    ]
  }

  const addCategory = () => {
    setCategories([...categories, newCategory])
    setNewItemId(newItemId + 1)
    setNewCategoryId(newCategoryId + 1)
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

  const addItemToCategory = (categoryId: number) => {
    setCategories(prevCategories => {
      const selectedCategoryIndex = prevCategories.findIndex(
        category => category.id === categoryId
      )

      if (selectedCategoryIndex !== -1) {
        const newCategories = [...prevCategories]
        newCategories[selectedCategoryIndex] = {
          ...newCategories[selectedCategoryIndex],
          items: [
            ...newCategories[selectedCategoryIndex].items,
            {
              id: newItemId,
              emoji: '🐐',
              name: 's'
            }
          ]
        }

        setNewItemId(prevItemId => prevItemId + 0.5)

        return newCategories
      }

      return prevCategories
    })
  }

  const updateItemFromCategory = (
    categoryId: number,
    itemId: number,
    newName: string,
    newEmoji: string
  ) => {
    console.log(categoryId, itemId, newName, newEmoji)
  }

  const deleteItemFromCategory = (categoryId: number, itemId: number) => {
    setCategories(prevCategories => {
      const selectedCategoryIndex = categories.findIndex(
        category => category.id === categoryId
      )

      const selectedCategory = prevCategories[selectedCategoryIndex]

      const selectedItemIndex = selectedCategory.items.findIndex(
        item => item.id === itemId
      )

      if (selectedItemIndex !== -1) {
        const newItems = selectedCategory.items.filter(
          item => item.id !== itemId
        )

        selectedCategory.items = newItems
        console.log(selectedCategory)

        return prevCategories
      }
      return prevCategories
    })
  }

  useEffect(() => addCategory(), [])

  return (
    <categoryOptionsContext.Provider
      value={{
        updateCategory,
        deleteCategory,
        addItemToCategory,
        updateItemFromCategory,
        deleteItemFromCategory
      }}
    >
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
