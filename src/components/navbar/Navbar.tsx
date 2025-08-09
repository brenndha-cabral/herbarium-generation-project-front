import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-green-900 text-white'>
        <div className='container flex justify-between text-lg'>
          <Link to='/home' className='text-2xl font-bold'>Herbarium</Link>
          <div className='flex gap-4'>
            <Link to='/listcategories' className='hover:text-gray-300'>Categories</Link>
            <Link to='/createcategory' className='hover:text-gray-300'>Register Category</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

