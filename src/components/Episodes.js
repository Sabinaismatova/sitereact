import episode1 from './images/episode1.png'
// import episode2 from './images/episode2.png'
// import episode3 from './images/episode3.png'


function Episodes() {
  return (
    <div className='w-full justify-center items-center justify-self-center'>
        <div>
            <h3 className='text-[64px]'>Latest episodes</h3>
            <p className='w-[208px] h-[51px] bg-[#118DA8] text-center pt-[11px] text-[18px] rounded-[6px]'>View all episodes</p>
        </div>
        <div className='w-[1300px] bg-black flex gap-8 justify-center rounded-[32px]'>
            <img src={episode1} alt="intro"/>
            <div>
                <p className='w-[73px] h-[27px] bg-[#191919] rounded-[5px] text-center mb-[50px]'>Gear</p>
                <p className='text-[#118DA8]'>Episode   3</p>
                <p className='text-[64px] mb-[20px]'>Should you get outboard audio gear?</p>
                <p className='opacity-[70%] mb-[20px]'>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                <p className='w-[208px] h-[51px] bg-[#118DA8] text-center pt-[11px] text-[18px] rounded-[6px]'>View all episodes</p>
            </div>
        </div>
    </div>
  )
}

export default Episodes