import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details

  return (
    <li className="gamesDiv">
      <img className="gamesImg" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
