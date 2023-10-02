import './index.css'

const TabItem = props => {
  const detailsList = props
  const tab = detailsList.detailsList.displayText
  const id = detailsList.detailsList.tabId
  // eslint-disable-next-line no-unused-vars
  const active = detailsList.isActive
  const isTrue = active ? 'addStyle' : ''

  const showRelatedGames = () => {
    detailsList.onClickFilter(id)
  }

  return (
    <li className="list">
      <button
        className={`btn ${isTrue}`}
        onClick={showRelatedGames}
        type="button"
      >
        {tab}
      </button>
    </li>
  )
}

export default TabItem
