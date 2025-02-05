import { useContext } from "react";
import { AuthC } from "./provider/AuthProviderx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const {updateP } = useContext(AuthC);
    const navigate = useNavigate();
    const handleSubmit=(e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const Name = form.get("name");
    const Photo = form.get("photoURL");
    updateP({displayName:Name, photoURL:Photo})
    .then(
        () => {
          navigate("/my-profile")
        }
      );
    }
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>            
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center">Update Your Profile</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" id="name" type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photoURL</span>
            </label>
            <input name="photoURL" id="photoURL" type="text" placeholder="photoURL" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-400">Update Profile</button>
          </div>
          
        </form>
      </div>
      </div>
    );
};

export default UpdateProfile;