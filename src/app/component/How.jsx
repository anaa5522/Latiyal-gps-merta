"use client";


export default function How() {
  

  return (
    <section
      
      className="w-full bg-[#F6F2EA]  flex justify-center"
    >
      <div className="max-w-6xl w-full ">
        {/* Responsive flex: column mobile, row desktop */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 ">

          {/* LINE (only desktop) */}
          

          {/* STEP 1 */}
          <div
            className='flex bg-white px-8 py-4 rounded-xl justify-center  hover:scale-[1.02]
                    transition-all duration-300 shadow-[0_18px_40px_rgba(252,177,59,0.45)]'
          >
            <h2 className="rounded-full w-10 h-10 text-center justify-start  bg-[#F0B100] pt-2">
              1
            </h2>
            <p className="mx-4 pt-1 text-lg">device in vehicle</p>
          </div>

          {/* STEP 2 */}
          <div
             className='flex bg-white px-8 py-4 rounded-xl justify-center  hover:scale-[1.02]
                    transition-all duration-300 shadow-[0_18px_40px_rgba(252,177,59,0.45)]'
          >
            <h2 className="bg-[#F0B100] rounded-full w-10 h-10 text-center justify-start  pt-2">
              2
            </h2>
            <p className="mx-4 pt-1 text-lg"> signel to satelite</p>
          </div>

          {/* STEP 3 */}
          <div
            className='flex bg-white px-12 py-4 rounded-xl justify-center  hover:scale-[1.02]
                    transition-all duration-300 shadow-[0_18px_40px_rgba(252,177,59,0.45)]'
          >
            <h2 className="bg-[#F0B100] rounded-full w-10 h-10 mr-2 text-center justify-start  pt-2">
              3
            </h2>
            <p className="mx-4 mr-2 pt-1 text-lg">Live tracking</p>
          </div>

        </div>
      </div>
    </section>
  );
}
