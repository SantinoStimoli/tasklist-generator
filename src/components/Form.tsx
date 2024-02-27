import { Button } from '@mui/material'
import { Category } from '../interfaces/interfaces'
import FormCategory from './FormCategory'

const Form = ({ categories }: { categories: Category[] }) => {
  return (
    <form className='w-full max-w-[400px] text-center'>
      <div className='flex flex-col gap-3'>
        {categories.length === 0 ? (
          <p>No hay items cargados</p>
        ) : (
          categories.map((category, i) => {
            return <FormCategory key={i} element={category} />
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
