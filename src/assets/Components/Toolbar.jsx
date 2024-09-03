import { Tooltip } from "react-tooltip"
import PropTypes from "prop-types"
const Toolbar = ({tid}) => {
  return (
    <div className="w-1/12 h-full  flex justify-center relative">
    <div className="flex h-[159px] w-[24px] absolute bottom-[7.25rem] flex-col justify-between">
    
    <img data-tooltip-id={tid} data-tooltip-content="Lorem ipsum dolor sit amet." src="/Question.svg" className="cursor-pointer" alt="" />
    <Tooltip id={tid}/>
    <img className="cursor-pointer" src="/Boxes.svg" alt="" />
    </div>
    </div>
  )
}
Toolbar.propTypes={
    tid:PropTypes.string
}

export default Toolbar