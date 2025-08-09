function Footer() {
  const data = new Date().getFullYear()
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-green-900 text-white'>
        <div className='container flex flex-col items-center py-4'>
          <p className='text-xl font-bold'>Herbarium | Copyright: {data}</p>
          <div className='flex gap-2'>
            <span className='text-white'>Projeto Generation 2025</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

