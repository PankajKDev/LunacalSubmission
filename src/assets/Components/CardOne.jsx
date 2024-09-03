
import { cardHeaderData,articleText } from "../constants"
import Toolbar from "./Toolbar"
import Breaker from "./Breaker"
const CardOne = () => {
  return (
    <>

    <div className="w-[calc(720px-3rem)] md:w-[720px]  h-[316px] flex flex-col justify-center card">
        
        <div className="w-full flex justify-center">
        <div className="card-header ">
          {
            cardHeaderData.map((item)=>{
              return(
                <button key={item} className="btn ">{item}</button>
              )
            })
          }
        </div>
        </div>
        <div className="bg-full h-full flex"> 
<Toolbar tid="cardONETID"/>
<div className="w-full h-full flex items-center justify-center articleCard">
  <article className="font-Jakarta articleCard  w-[611px] text-balance text-[#969696] font-normal overflow-x-hidden overflow-y-scroll h-[175px]">
{articleText}
  </article>
</div>
</div>
    </div>
<Breaker/>
    
    </>
  )
}

export default CardOne