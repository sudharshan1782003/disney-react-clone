import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithPhoneNumber } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import {UserAuth} from "./UseContext.js"

const Login = () => {

   
   const [showLogin, setshowLogin] = React.useState(false);
 
      const [email, setemail] = React.useState("") 
      const [password, setpassword] = React.useState("")
      const [Loginemail,  setLoginemail] = React.useState("") 
      const [Loginpassword,  setLoginpassword] = React.useState("") 
      const [phone, setphone] = React.useState("")
      const {Register} = UserAuth()
      const {Loggedin} = UserAuth()
      const {User} = UserAuth()
      const {signOut} = UserAuth()
      const navigate = useNavigate()
  
  
    const HandleRegister = async(e) => {
      e.preventDefault()
      try{
        await Register(email, password)
        setshowLogin(true)
      }catch(err){
        console.log(err.message)
      }
    }

    const HandleLogin = async(e) => {
      e.preventDefault()
      try{
        await Loggedin(Loginemail, Loginpassword)
        navigate('/')
      }catch(err){
        console.log(err.message)
      }
    }

    const HandleLogout =  async(e) => {
      e.preventDefault()
      try{
        await signOut()
        setshowLogin(true)
      }catch(err){
        console.log(err.message)
      }
    }

  
  return (
   <>
    {
      !showLogin && !User && (
        <div className='md:flex gap-6 pt-44 pb-52 hidden'>
      <div className='bg-gradient-to-l from-blue-500 to-blue-800  w-64 h-56 flex justify-center items-center'>
        <div className='text-white text-center'>Register Using Your Email</div>
      </div>
      <div className='text-gray-400 flex flex-col gap-5 justify-center items-center'>
        <input type='email' className=' pl-2 rounded-lg bg-transparent outline-none border-2 border-gray-400' placeholder='Enter Your Mail' value={email} onChange={(e) => setemail(e.target.value)} />
        <input type='password' className='pl-2 rounded-lg bg-transparent outline-none border-2 border-gray-400' placeholder='Enter Your Password' value={password}  onChange={(e) => setpassword(e.target.value)} />
        <button className='rounded-sm bg-gradient-to-l from-blue-500 to-blue-800 text-white px-5 mt-4'  onClick={HandleRegister}>Register</button>
        <div>Already A User???</div>
        <div className='-mt-2 text-blue-600 cursor-pointer' ><button onClick={() => setshowLogin(true)}>Login</button></div>
      </div>
    </div> 
      )
    }
   {
    !showLogin && !User && (
      <div className='text-gray-400 pt-44 pb-44 flex flex-col justify-center items-center gap-4 md:hidden'>
      <div>Register With Email</div>
      <div><input type="email" className='bg-transparent outline-none pl-2 border-2 border-gray-400 rounded-md' placeholder='Enter Your Email' value={email} onChange={(e) => setemail(e.target.value)} /></div>
      <div><input type="password" className='bg-transparent outline-none pl-2 border-2 border-gray-400 rounded-md' placeholder='Enter Your Password' value={password}  onChange={(e) => setpassword(e.target.value)} /></div>
      <div className='rounded-sm cursor-pointer bg-gradient-to-l from-blue-500 to-blue-800 text-white px-5 mt-4' onClick={HandleRegister} >Register</div>
      <div>Already A User???</div>
      <div className='-mt-2 text-blue-600 cursor-pointer' onClick={() => setshowLogin(true)}>Login</div>
    </div>
    )
   }
      
      //Login

     {
      showLogin && !User && (
        <div className='md:flex gap-6 pt-44 pb-52 hidden'>
        <div className='bg-gradient-to-l from-blue-500 to-blue-800  w-64 h-56 flex justify-center items-center'>
          <div className='text-white text-center'>Login Using Your Email</div>
        </div>
        <div className='text-gray-400 flex flex-col gap-5 justify-center items-center'>
          <input type='email' className=' pl-2 rounded-lg bg-transparent outline-none border-2 border-gray-400' placeholder='Enter Your Mail' value={Loginemail} onChange={(e) => setLoginemail(e.target.value)} />
          <input type='password' className='pl-2 rounded-lg bg-transparent outline-none border-2 border-gray-400' placeholder='Enter Your Password' value={Loginpassword}  onChange={(e) => setLoginpassword(e.target.value)} />
          <button className='rounded-sm bg-gradient-to-l from-blue-500 to-blue-800 text-white px-5 mt-4'  onClick={HandleLogin}>Login</button>
          <div>Not A User???</div>
          <div className='-mt-2 text-blue-600 cursor-pointer'><button onClick={() => setshowLogin(false)}>Register</button></div>
        </div>
        </div> 
      )
     }
    
   {
    showLogin && !User && (
      <div className='text-gray-400 pt-44 pb-44 flex flex-col justify-center items-center gap-4 md:hidden'>
      <div>Login With Email</div>
      <div><input type="email" className='bg-transparent outline-none pl-2 border-2 border-gray-400 rounded-md' placeholder='Enter Your Email' value={Loginemail} onChange={(e) => setLoginemail(e.target.value)} /></div>
      <div><input type="password" className='bg-transparent outline-none pl-2 border-2 border-gray-400 rounded-md' placeholder='Enter Your Password' value={Loginpassword}  onChange={(e) => setLoginpassword(e.target.value)} /></div>
      <div className='rounded-sm bg-gradient-to-l from-blue-500 to-blue-800 text-white px-5 mt-4 cursor-pointer' onClick={HandleLogin} >login</div>
      <div>Not A User???</div>
      <div className='-mt-2 text-blue-600 cursor-pointer' onClick={() =>setshowLogin(false) }>register</div>
    </div>
    )
   }

   {
    User && (
      <div className='rounded-sm bg-gradient-to-l from-blue-500 to-blue-800 text-white px-5 mt-9 cursor-pointer' onClick={HandleLogout}>Logout</div>
    )
   }

      </>
   
   
  )
}
  
export default Login