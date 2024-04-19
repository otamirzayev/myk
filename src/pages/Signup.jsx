import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



function Signup() {
  const {signupWithGoogle , user , error} = useSignUp()

    return (
      <div className="min-h-screen grid place-items-center">
       <div className="max-w-96 w-full text-center">
       <h2 className="font-bold text-4xl mb-10">Signup</h2>
        <button onClick={signupWithGoogle} className="btn btn-secondary mb-5">
        <FcGoogle className="text-3xl"/>
          <span className="text-2xl">Google</span></button>
          <p><Link className="hover:text-violet-600" to="/signin">Are you already registered? Login</Link></p>
       </div>
          
      </div>
    )
  }
  
export default Signup