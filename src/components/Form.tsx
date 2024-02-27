import { Category } from '../interfaces/interfaces'
import FormCategory from './FormCategory'

const Form = ({ categories }: { categories: Category[] }) => {
  return (
    <form>
      {categories.length === 0 ? (
        <p>No hay items cargados</p>
      ) : (
        categories.map((category, i) => {
          return <FormCategory key={i} category={category} />
        })
      )}
    </form>
  )
}

export default Form
