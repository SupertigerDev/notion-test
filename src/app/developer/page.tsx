"use client"
import { useEffect, useState } from 'react'
import { NotionPageResult, getDeveloperPage } from '../notion'
import Link from 'next/link';

export default function DeveloperPage() {
  const [APIResults, setAPIResults] = useState<NotionPageResult[] | null>(null);

  useEffect(() => {
    console.log("fetching")
    getDeveloperPage().then(res => {
      setAPIResults(res);
    })
  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center">

      <h1 className='font-bold m-5'>Developer Page</h1>
      <div className='flex flex-col gap-5'>
        {APIResults ? APIResults.map((result: NotionPageResult) => (
          <div className='max-w-lg' key={result.id}>{result.paragraph.rich_text[0].plain_text}</div>
        )) : <div>Loading...</div>}
      </div>
      <Link className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm m-10' href="/">Go to Home</Link>
    </main>
  )
}
