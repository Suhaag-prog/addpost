
import { useEffect, useState } from 'react'
import {login,logout} from './store/auth.Slice'
import {useDispatch} from 'react-redux'
import autserobj from './appwrite/auth'
import Header  from './component/Header/Header.jsx'
import Footer from   './component/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  
  console.log(import.meta.env.VITE_APPWRITE_URL)
  useEffect(()=>{
    autserobj.getcurrentstate()
    .then((userdata)=>{
      if(userdata){
      dispatch(login(userdata))
      }else{
        dispatch(logout())
      }
    }).catch(
      (error)=>{
        console.log("error at the starting")
      }
    )
    .finally(()=>{
      setLoading(false)
    })
  },[])
      return !loading?  (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
          TODO:  <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    ) : null
    
}
//   <div className='min-h-screen flex flex-wrap content-between w-full items-center justify-center bg-gray-400 '>
    //     <div className='w-full  flex  flex-col  justify-center  items-center  bg-amber-700'>
    //     <Header/>
    //     <main>
    //       <Outlet/>
    //     </main>
    //     <Footer/>
    //     </div>
    //   </div>
    // ):null

export default App
