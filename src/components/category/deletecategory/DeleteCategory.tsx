import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategoryById, deleteCategory } from '../../../services/Service'
import type Category from '../../../models/Category'

function DeleteCategory() {
  const navigate = useNavigate()
  const [category, setCategory] = useState<Category>()
  const [, setIsLoading] = useState(false)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id !== undefined) {
      getCategoryById(Number(id), setCategory)
    }
  }, [id])

  function goBack() {
    navigate('/listcategories')
  }

  function confirmDelete() {
    setIsLoading(true)
    deleteCategory(Number(id))
    setIsLoading(false)
    goBack()
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Delete Category</h1>
      <p className='text-center font-semibold mb-4'>Are you sure you want to delete the following category?</p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>{category?.name}</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{category?.description}</p>
        <div className='flex'>
          <button className='w-full text-slate-100 bg-blue-400 hover:bg-blue-900 flex items-center justify-center py-2' onClick={goBack}>
            No
          </button>
          <button className='text-slate-100 bg-red-400 hover:bg-red-900 w-full flex items-center justify-center' onClick={confirmDelete}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCategory

