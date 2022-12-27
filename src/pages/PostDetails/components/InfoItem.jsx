const InfoItem = ({ title, value }) => {
  return (
    <div className='w-80'>
      <p className='font-semibold text-gray-800 text-lg break-all'>{title}</p>
      <p className='break-all'>{value}</p>
    </div>
  )
}

export default InfoItem
