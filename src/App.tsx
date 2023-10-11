import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-6'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold">
        Vite + React
      </h1>
    </div>

  )
}

export default App
