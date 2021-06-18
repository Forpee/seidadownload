import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Seida download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
       Hello <span className="text-blue-600">Seida Team</span> 
        </h1>

        <p className="mt-3 text-xl">
         This is where you can download our app for now
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/seida.apk"
            className="p-6 mt-6 text-2xl font-semibold border w-96 rounded-xl text-center hover:text-blue-600 focus:text-blue-600"
          >
          Download
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <h1
          className="flex items-center justify-center font-semibold"
        
        >
          Powered by Seida
        
        </h1>
      </footer>
    </div>
  )
}
