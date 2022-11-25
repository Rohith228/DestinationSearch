import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="place-container">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
