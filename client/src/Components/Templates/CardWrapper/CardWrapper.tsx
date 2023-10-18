import './CardWrapper.scss'
import CoworkCard from '../../Organisms/CoworkCard/CoworkCard'
import { useDataContext } from "../../../Context/DataContext"; 



const CardWrapper = () => {
  
  const { coworkingSpaces } = useDataContext();

  return (
    <div className='cardWrapper'>
      {coworkingSpaces && coworkingSpaces.map(space => (
        <CoworkCard key={space._id} {...space}/>
      ))}
    </div>
  )
}

export default CardWrapper