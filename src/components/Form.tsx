import { Button } from '@mui/material'
import { Category } from '../interfaces/interfaces'
import FormCategory from './FormCategory'
import { FormEvent } from 'react'
import { copyToClipboard } from '../utils/copyMessage'

const Form = ({ categories }: { categories: Category[] }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let message = `*Lista* \n.\n`

    categories.forEach(category => {
      const categoryMessage = `~${category.name}~ ${category.emoji}:\n`
      message = message + categoryMessage
      category.items.forEach(item => {
        const itemMessage = `${item.name} ${item.emoji}\n`
        message = message + itemMessage
      })
      message = message + `.\n.\n`
    })

    console.log(message)

    copyToClipboard(message)
  }

  return (
    <form className='w-full max-w-[400px] text-center' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        {categories.length === 0 ? (
          <p>No hay items cargados</p>
        ) : (
          categories.map((category, i) => {
            return <FormCategory key={i} category={category} />
          })
        )}
      </div>

      <Button className='!mt-5' type='submit' variant='contained'>
        Generar texto
      </Button>
    </form>
  )
}

export default Form
