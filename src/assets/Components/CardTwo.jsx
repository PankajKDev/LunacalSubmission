
import Breaker from "./Breaker"
import Toolbar from "./Toolbar"

const CardTwo = () => {
  return (
    <>
    

    <div className="w-[calc(720px-3rem)] md:w-[720px]  h-[316px] flex flex-col justify-center card">
          <div className="w-full flex justify-center">
            <div className="card-header-two">
              <div>
                <button className="w-[149px] h-[62px]  rounded-[20px] font-Poppins bg-black text-white hover:bg-white hover:text-black">Gallery</button>
              </div>
              <div className="gap-5 flex">
                <input className="hidden" type="file" multiple  id="inputImage" />
                <label className="plusButton" htmlFor="inputImage">        
                  +&nbsp; ADD IMAGE         
                </label>
                <button className="Arrow">
                  <img className="w-[14px] h-[14px]" src="/Arrow.svg" alt="" />
                </button>
                <button className="Arrow">
                  <img className="w-[14px] transform scale-x-[-1] h-[14px]" src="/Arrow.svg" alt="" />
                </button>
              </div>
            </div>
           
          </div>
          <div className="bg-full h-full flex"> 
   <Toolbar tid="card"/>
   <div className="mt-[28px] flex gap-3 ">
    <img className="imageCard" src="/building.svg" alt="" />
    <img className="imageCard" src="/building.svg" alt="" />
    <img className="imageCard" src="/building.svg" alt="" />
   </div>
          </div>
    </div>
    <Breaker/>
    </>
  )
}

export default CardTwo