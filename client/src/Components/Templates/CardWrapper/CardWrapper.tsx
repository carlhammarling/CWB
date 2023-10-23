import './CardWrapper.scss'
import CoworkCard from '../../Organisms/CoworkCard/CoworkCard'

interface CardWrapperProps {
  coworkingSpaces: CoworkingSpace[]
}

const CardWrapper = (props: CardWrapperProps) => {
  
  
  return (
    <div className='cardWrapper'>
      {props.coworkingSpaces && props.coworkingSpaces.map(space => (
        <CoworkCard key={space._id} {...space}/>
      ))}
    </div>
  )
}

export default CardWrapper