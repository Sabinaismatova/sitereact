import introMain from './images/intromain.png'
import spotify from './images//spotify.png'
import ccc from './images/ccc.png'
import cloud from './images/cloud.png'
import music from './images/music.png'
import connect from './images/cloud.png'

const Intro = () => {
  return (
    <div id='intro' className="w-full flex gap-13 items-center justify-center mt-[50px]">
        <img src={introMain} alt="intro"/>
        <div className='w-[530px]'>
            <p className='text-[70px]'>Take your podcast to the</p>
            <div className='flex gap-5 mb-[100px]'>
            <p className='text-[75px] underline decoration-blue-500'>next</p>
            <p className='text-[80px] font-bold'>level</p>
            </div>
            <p>Listen on</p>
            <div className='flex gap-3 mt-[15px]'>
                <img src={spotify} alt="intro"/>
                <img src={ccc} alt="intro"/>
                <img src={cloud} alt="intro"/>
                <img src={music} alt="intro"/>
                <img src={connect} alt="intro"/>
            </div>
        </div>
    </div>
  )
}

export default Intro