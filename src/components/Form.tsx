import { Button } from '@mui/material'
import { Category } from '../interfaces/interfaces'
import FormCategory from './FormCategory'
import { FormEvent } from 'react'

const Form = ({ categories }: { categories: Category[] }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let message = `*Lista* \n.\n`

    categories.forEach(category => {
      const categoryMessage = `~${category.name}~ ${category.emoji}:\n.\n.\n`
      message = message + categoryMessage
    })

    console.log(message)
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
