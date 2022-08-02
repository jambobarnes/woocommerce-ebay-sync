import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaGithub, FaInfoCircle } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>WooCommerce &lt;-&gt; Ebay Sync Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center space-y-8">
        <h1 className="text-4xl font-bold">
          WooCommerce &lt;-&gt; Ebay Sync Tool
        </h1>

        <p className='text-lg max-w-2xl'>This is a free and open-source tool for event-driven synchronisation of WooCommerce sites with eBay stores, without the need to know or use PHP</p>

        <div className='flex gap-4'>
        <a
          href="https://github.com/jambobarnes/woocommerce-ebay-sync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-sc-green hover:bg-slate-600 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg text-white flex items-center justify-center gap-2">
            <p>Read Docs (coming soon)</p>
            <FaInfoCircle />
          </div>
        </a>

        <a
          href="https://github.com/jambobarnes/woocommerce-ebay-sync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-black hover:bg-slate-600 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg text-white flex items-center justify-center gap-2">
            <p>View on GitHub</p>
            <FaGithub />
          </div>
        </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://sharpcircle.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/sharp-circle-logo.png" alt="Shapr Circle Logo" width={76.8} height={41.1} />
        </a>
      </footer>
    </div>
  )
}

export default Home
