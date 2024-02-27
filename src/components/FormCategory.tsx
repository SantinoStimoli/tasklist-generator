import { Category } from '../interfaces/interfaces'

const FormCategory = ({ category }: { category: Category }) => {
  return (
    <div>
      <p>{category.name}</p>
    </div>
  )
}

export default FormCategory
