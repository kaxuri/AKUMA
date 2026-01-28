import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-black flex flex-col items-center justify-center text-white p-4`}>
      <main className="text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          ΛKUMΛ 3.0
        </h1>

        <div className="space-y-2">
          <p className="text-sm md:text-base font-light tracking-[0.3em] text-purple-400/80 uppercase">
            ETA 2027
          </p>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full" />
        </div>
      </main>
    </div>
  )
}