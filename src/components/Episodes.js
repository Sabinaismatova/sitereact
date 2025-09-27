import episode1 from './images/episode1.png'
import episode2 from './images/episode2.png'
import episode3 from './images/episode3.png'


function Episodes() {
  return (
    <div id='episodes' className='w-full flex flex-col items-center gap-10 mt-[100px]'>
        <div className='flex gap-[580px] items-center '>
            <p className='text-[64px] tracking-[3px]'>Latest episodes</p>
            <button className='w-[208px] h-[51px] bg-[#118DA8] text-center text-[18px] rounded-[6px]'>View all episodes</button>
        </div>
        <div className='w-[1300px] bg-black flex gap-8 justify-center rounded-[32px] p-10'>
            <img src={episode1} alt="intro"/>
            <div>
                <p className='w-[73px] h-[27px] bg-[#191919] rounded-[5px] text-center mb-[50px]'>Gear</p>
                <p className='text-[#118DA8]'>Episode   3</p>
                <p className='text-[64px] mb-[20px]'>Should you get outboard audio gear?</p>
                <p className='opacity-[70%] mb-[20px]'>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat suscipit earum voluptates debitis molestias officia fugiat sapiente omnis quo.s our reasons on why you might want to consider picking something up.</p>
                <button className='w-[208px] h-[51px] bg-[#118DA8] text-center text-[18px] rounded-[6px]'>View all episodes</button>
            </div>
        </div>
        <div className='w-[1300px] bg-black flex gap-8 justify-center rounded-[32px] p-10'>
            <img src={episode2} alt="intro"/>
            <div>
                <p className='w-[130px] h-[27px] bg-[#191919] rounded-[5px] text-center mb-[50px]'>Tips & Tricks</p>
                <p className='text-[#118DA8]'>Episode   2</p>
                <p className='text-[64px] mb-[20px]'>Mic tricks to take you to the next level</p>
                <p className='opacity-[70%] mb-[20px]'>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat suscipit earum voluptates debitis picking something up.</p>
                <button className='w-[208px] h-[51px] bg-[#118DA8] text-center text-[18px] rounded-[6px]'>View all episodes</button>
            </div>
        </div>
        <div className='w-[1300px] bg-black flex gap-8 justify-center rounded-[32px] p-10'>
            <img src={episode3} alt="intro"/>
            <div>
                <p className='w-[73px] h-[27px] bg-[#191919] rounded-[5px] text-center mb-[50px]'>Gear</p>
                <p className='text-[#118DA8]'>Episode   1</p>
                <p className='text-[64px] mb-[20px]'>The best microphone under $200</p>
                <p className='opacity-[70%] mb-[20px]'>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat suscipit on why you might want to consider picking something up.</p>
                <button className='w-[208px] h-[51px] bg-[#118DA8] text-center text-[18px] rounded-[6px]'>View all episodes</button>
            </div>
        </div>
    </div>
  )
}

export default Episodes