import { useEffect, useState } from 'react'
import CardCategory from '../cardcategory/CardCategory'
import { listCategories } from '../../../services/Service'

interface Category {
  id: number
  name: string
  description: string
  product: string[]
}

function ListCategories(props: { limite?: number }) {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    listCategories(setCategories)
  }, [])

  return (
    <>
      <div className='flex justify-center w-full my-4'>
        <div className='container flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {categories.map((category, index) => {
              if (props.limite && index <= props.limite) {
                return <CardCategory key={category.id} category={category} />
              }
              if (!props.limite) {
                return <CardCategory key={category.id} category={category} />
              }
              return null
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListCategories

