import { type ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Category from '../../../models/Category'
import { createCategory, updateCategory, getCategoryById } from '../../../services/Service'

function FormCategory() {
  const navigate = useNavigate()
  const [category, setCategory] = useState<Category>({ id: 0, name: '', description: '' })
  const [, setIsLoading] = useState(false)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id !== undefined) {
      getCategoryById(Number(id), setCategory)
    }
  }, [id])

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }

  function goBack() {
    navigate('/listcategories')
  }

  async function submit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    if (id) {
      updateCategory(category, setCategory)
    } else {
      createCategory(category, setCategory)
    }
    setIsLoading(false)
    goBack()
  }

  return (
    <div className='container flex flex-col items-center justify-center mx-auto p-4'>
      <h1 className='text-4xl text-center my-8'>{id === undefined ? 'Register Category' : 'Edit Category'}</h1>
      <form className='w-1/2 flex flex-col gap-4' onSubmit={submit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name:</label>
          <input type='text' placeholder='Enter the category name' name='name' value={category.name} onChange={updateState} className='border-2 border-slate-700 rounded p-2' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='description'>Description:</label>
          <input type='text' placeholder='Enter the category description' name='description' value={category.description} onChange={updateState} className='border-2 border-slate-700 rounded p-2' />
        </div>
        <button className='rounded text-slate-100 bg-green-900 hover:bg-green-700 w-1/2 py-2 mx-auto flex justify-center' type='submit'>
          <span>{id === undefined ? 'Create' : 'Update'}</span>
        </button>
      </form>
    </div>
  )
}

export default FormCategory

