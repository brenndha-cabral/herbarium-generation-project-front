import ListCategories from '../../components/category/listcategories/ListCategories'

function Home() {
  return (
    <>
      <div className='bg-green-900 w-full flex justify-center'>
        <div className='container grid grid-cols-2 text-white'>
          <div className='flex flex-col gap-4 items-center justify-center py-4'>
            <h2 className='text-5xl font-bold'>Herbarium</h2>
            <p className='flex flex-col items-center justify-center text-2xl'>
              Produtos Naturais
            </p>
          </div>
          <div className='flex justify-center'>
          <img
              src='public/images/logo.png'
              alt='Imagem Página Home'
              className='w-2/3'
            />
          </div>
        </div>
      </div>
      <ListCategories limite={5} />
    </>
  )
}

export default Home

