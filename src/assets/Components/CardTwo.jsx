
import { useState } from "react"
import Breaker from "./Breaker"
import Toolbar from "./Toolbar"

const CardTwo = () => {

const [images,setImages]=useState([])//holds images

const [previews,setPreviews]=useState([])//holds array of URl's

const handleImageChange=(event)=>{
  const files=Array.from(event.target.files) //converting uploaded images into array
  //limiting images
  if(images.length+files.length>3){
   previews.shift()
   images.shift()
  }
  const newImages=[]//holds new Images
  const newPreviews=[] //holds new data URLs

  files.forEach((file)=>{
    const reader=new FileReader()
    reader.onload=()=>{
      newImages.push(file);
      newPreviews.push(reader.result)
      //pushing file and DataURLs to newImages and newPreviews

//Updating state after reading Images
if(newImages.length===files.length){
  setImages((prevImages)=>[...prevImages,...newImages])
  setPreviews((prevPreviews)=>[...prevPreviews,...newPreviews])
}//appending new Images with old ones

    }
    reader.readAsDataURL(file)
  })

}


  return (
    <>
    <div className="w-[calc(720px-3rem)] md:w-[720px]  h-[316px] flex flex-col justify-center card">
          <div className="w-full flex justify-center">
            <div className="card-header-two">
              <div>
                <button className="w-[149px] h-[62px]  rounded-[20px] font-Poppins bg-black text-white">Gallery</button>
              </div>
              <div className="gap-5 flex">
                <input className="hidden" accept="image/" type="file" id="inputImage"  onChange={handleImageChange} />
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
   {previews.length > 0 ? (
              previews.map((preview, index) => (
                <img key={index} accept="image/*" src={preview} alt={`Uploaded Image Preview ${index + 1}`} className="imageCard" />
              ))
            ) : (
              <div className="w-[650px] rounded-md inset-3 h-[180px] flex justify-center items-center text-[#969696] font-Jakarta text-2xl  border border-gray-600">No images uploaded yet.</div>
            )}
   </div>
          </div>
    </div>
    <Breaker/>
    </>
  )
}

export default CardTwo