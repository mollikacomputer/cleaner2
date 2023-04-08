import { Inter } from 'next/font/google'
import Carousel from '../../Components/Carousel'
import Status from '../../Components/Status'
import Comments from '../../Components/Comments'
import Services from '../../Components/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="">
        <Carousel/>
      </div>
      <Services/>
      <Status/>
      <Comments/>
    </main>
  )
}
