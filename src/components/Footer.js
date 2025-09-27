import logo from './images/logo.png'
import spotify from './images//spotify.png'
import ccc from './images/ccc.png'
import cloud from './images/cloud.png'
import music from './images/music.png'
import connect from './images/cloud.png'

function Footer() {
  return (
    <div className='w-[1300px] flex gap-20 mx-auto  mt-[150px]'>
        <div className='flex flex-col gap-4'>
            <img src={logo} alt="logo" />
            <div className='flex gap-2'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
        </div>
        <div className='text-[17px] flex flex-col ml-[170px] gap-2'>
            <p>Home</p>
            <p>About</p>
            <p>Episodes</p>
            <p>Contact</p>
        </div>
        <div className='text-[17px] flex flex-col gap-2'>
            <p>Style Guide</p>
            <p>Instructions</p>
            <p>Changelog</p>
            <p>Credit</p>
            <p>Powered by Webflow</p>
            <p>Licenses</p>
        </div>
        <div className='w-[100px] h-[35px] flex gap-3 mt-[15px]'>
                <img src={spotify} alt="intro"/>
                <img src={ccc} alt="intro"/>
                <img src={cloud} alt="intro"/>
                <img src={music} alt="intro"/>
                <img src={connect} alt="intro"/>
            </div>
    </div>
  )
}

export default Footer