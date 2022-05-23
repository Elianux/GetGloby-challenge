import Image from 'next/image'

export default function NoResultsPage() {
  return (
    <div className='h-screen mt-20 '>
      <Image src='/no_results.png' alt='Empty' width={300} height={300} />
      <p className='text-white font-bold mt-5 text-3xl'>No results found</p>
    </div>
  )
}
