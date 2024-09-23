import Header from '@/components/header'

import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        {/* header*/ }
        <Header/>
   <Outlet/>

        {/*body*/}
      </main>

      {/* footer */}
      <div className='p-10 text-center bg-gray-800 mt-10'>
        made With 💖️ by Ritik Pal
      </div>
    </div>
  )
}

export default AppLayout
