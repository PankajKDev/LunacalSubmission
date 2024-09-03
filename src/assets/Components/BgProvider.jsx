
// eslint-disable-next-line react/prop-types
const BgProvider = ({children}) => {
  return (
    <div className='bg-gradient-custom ' >
    <div className='grid-pattern w-full h-full'>
        {children}
    </div>
        </div>
  )
}

export default BgProvider