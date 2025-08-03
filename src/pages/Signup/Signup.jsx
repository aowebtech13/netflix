import React from 'react'
import './Signup.css'
import Header from '../../components/Header/Header'

import background from '../../assets/background.jpg'





const Signup = () => {
  return (
   <div  className='container'>
    <Header login={true} />
    
 
        <div className='content'>
       

        
        

   
    <div className='body'>
        <div className='texts'>
            <h1 className='title'>Unlimited movies, TV shows, and more.</h1>
            <h2 className='subtitle'>Watch anywhere. Cancel anytime.</h2>
            <p className='description'>Ready to watch? Enter your email to create or restart your membership.</p>

        </div>
        <div className='form-container' >
          <form className='form' >
            <input  type='email' placeholder='Enter email' required  name='email' />
            <input type='password' placeholder='Enter password' required name='password' />
            <button> 
                Sign Up
            </button>

          </form>

        </div>
        </div>

    </div>
    


   </div>
   
  )
}

export default Signup
