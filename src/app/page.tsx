"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getItems } from './notion'
import Link from 'next/link';

export default function Home() {
  const [APIResults, setAPIResults] = useState<any>(null);

  useEffect(() => {

    console.log("fetching")
    getItems().then(res => {
      setAPIResults(res);
    })

  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className='font-bold m-5'>Home Page</h1>

      <div className='flex '>
        {APIResults ? APIResults.map((item: any) => (
          <div className='whitespace-pre p-5' key={item.id}>
            <div className='text-gray-500'>{item.properties.Name?.title[0]?.text.content}</div>
            <div>{item.properties.Tags.rich_text[0]?.text.content}</div>
          </div>
        )) : <div>Loading...</div>}
      </div>
      <Link className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm m-10' href="/developer">Developer page</Link>
    </main>
  )
}
