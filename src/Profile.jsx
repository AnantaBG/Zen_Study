

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthC } from './provider/AuthProviderx';
import Footer from './Components/Home/Footer';
import { Helmet } from 'react-helmet';

function Profile() {
    const { user } = useContext(AuthC);

  return (
    <div className='bg-[#1a1434]'>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
    <div className='flex flex-col justify-center text-center text-white items-center  w-11/12 mx-auto '>
    <div className='flex mt-10'>
    <h2 className='text-xl md:text-2xl opacity-70 mt-8 w-full'>Welcome, {user?.displayName}!</h2>
    <img className='rounded-full ml-4 h-24 w-24' src={user?.photoURL} alt="" />
    </div>
    </div>
    <div className="profile-container  h-[382px]">
      <h2 className='border-b-2 border-dashed pb-10 text-3xl font-bold'>My Profile</h2>
      <div className="lg:flex justify-between grid">
        <div className="text-center mt-5 text-2xl flex">
          <label className='font-bold'>Full Name:</label>
          <p className='ml-2'>{user.displayName}</p>
        </div>
        <div className="text-center mt-5 flex text-2xl">
          <label className='font-bold'>Email:</label>
          <p className='ml-2'>{user.email}</p>
        </div>
      </div>
      <div className='flex justify-center mt-5 lg:mt-20 mx-auto'>
      <Link to="/update-profile">
        <button className='btn mt-5 bg-gradient-to-r from-blue-600 to-green-600'>Edit Profile</button>
      </Link>
      
      </div>
      <div className='flex justify-center mt-1 mx-auto'>
      <Link to="/">
        <button className='btn mt-5 bg-gradient-to-r from-green-600 to-blue-600'>Back To Home</button>
      </Link>
      
      </div>
 
    </div>
    <Footer></Footer>
    </div>

  );
}

export default Profile;