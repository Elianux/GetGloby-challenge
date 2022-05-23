import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import Router from 'next/router'

export default function SearchBar() {
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce<string>(search, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search === '') {
      Router.push('/')
    } else {
      Router.push(`/search?s=${search}`)
    }
  }, [debouncedSearch])

  return (
    <div className='md:mx-auto'>
      <div className='flex'>
        <input
          type='text'
          placeholder='Movie title'
          className='w-full pl-5 pt-2 pb-2 rounded-md outline-none focus:border-rose-600 focus:border-2'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
