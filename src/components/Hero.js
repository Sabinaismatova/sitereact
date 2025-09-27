import heroimg from './images/heromain.png'

function Hero() {
  return (
    <div id='hero' className='w-[1300px] flex gap-16 p-[5px] items-center mx-auto mt-[100px]'>
        <div className="flex flex-col gap-[30px]">
            <p className="w-[112px] h-[112px] bg-[#118DA8] rounded-full text-[65px] text-center pt-[5px]"><i class="fa-solid fa-arrow-right"></i></p>
            <p className="text-[18px] text-[#118DA8]">Meet your host</p>
            <p className="text-[65px] tracking-[3px]">Jacob Paulaner</p>
            <p className="opacity-[70%] text-[22px]">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
            <p className="opacity-[70%] text-[22px]">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
        </div>
        <img src={heroimg} alt="hero" />
    </div>
  )
}

export default Hero