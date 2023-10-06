import React from 'react'
import cover from "./wallpaperflare.com_wallpaper.jpg";

function Home() {
  return (
    <div className='container my-5' style={{minHeight:'70vh'}}>
        <img src={cover} alt="cover-Img" height={'100%'} width={'100%'}  />
        <h4 className='text-center text-success mt-3'>LoggedIn SuccessFully !!</h4>
    </div>
  )
}

export default Home