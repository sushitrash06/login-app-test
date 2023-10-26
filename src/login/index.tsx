import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleLogin=()=>{
        if(userName !== 'LoginAkun' || password !== 'Password'){
           setError(true)
        }else {
            navigate('/data')
        }
    }
    return (
        <>
            <div className="bg-slate-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <p className='text-2xl m-5 font-bold'>Login</p>
                <div>
                    <div className="m-5">
                        <p>Username </p>
                        <input value={userName} onChange={(value)=>{
                            setUsername(value.target.value)
                        }}  className=" mt-1  text-gray-700  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type={'text'} />
                    </div>
                    <div className="m-5">
                        <p>Password </p>
                        <input value={password} onChange={(value)=>{
                            setPassword(value.target.value)
                        }}   className="mt-1 block w-full text-gray-700 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type={'password'} />
                    </div>
                    {
                        error && (
                            <p className="text-red-500 mx-5">Masukan Akun dengan benar!</p>
                        )
                    }
                </div>
                <div className="p-5">
                    <button onClick={handleLogin} className="bg-sky-500 hover:bg-sky-700 w-full">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login

