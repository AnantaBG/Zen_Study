import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const handleSubmit=(e) =>{
    const auth = getAuth(app);
    
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value;
    

    sendPasswordResetEmail(auth, email)
    .then(() =>{
        toast.success(`Reset Password For ${email} Sent`)


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage)
      });
}
const ForgotPassword = () => {

    return (
        <form onSubmit={handleSubmit}>
        <div className="card-body card max-w-lg shrink-0 p-10 shadow-xl h-auto flex justify-center items-center m-auto">
         <div className="form-control">
            <input name="email" id="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <button  className="btn">Reset</button>
          <Link to="/"><a className="text-red-600 underline">Go Home</a></Link>
        </div>
        
        </form>

    );
};

export default ForgotPassword;