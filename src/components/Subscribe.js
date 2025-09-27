function Subscribe() {
  return (
    <div id="contact" className="bg-black w-[1300px] mx-auto flex p-[50px] gap-18 rounded-[32px] items-center mt-[150px]">
        <div>
            <p className="text-[18px] text-[#118DA8]">Email Newsletter</p>
            <p className="text-[72px] tracking-[3px]">Subscribe for updates</p>
        </div>
        <div className="flex flex-col gap-6">
            <div className="w-[520px] h-[80px] rounded-[6px] bg-[#191919] px-[15px] py-[20px]">
                <p className="text-[24px] opacity-[70%]">Name</p>
            </div>
            <div className="w-[520px] h-[80px] rounded-[6px] bg-[#191919] px-[15px] py-[20px]">
                <p className="text-[24px] opacity-[70%]">Email</p>
            </div>
            <button className="w-[87px] h-[48px] rounded-[6px] bg-[#118DA8]">Submit</button>
        </div>
    </div>
  )
}

export default Subscribe