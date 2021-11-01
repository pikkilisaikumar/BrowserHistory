import './index.css'

const HistoryDetails = props => {
  const {each, onDeleteImageDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = each

  const onDeleteImgeBtn = () => {
    onDeleteImageDetails(id)
  }

  return (
    <li className="list-item">
      <div className="threethingscontainer">
        <p className="timeaccessparagraph">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logoUrlimg" />
        <p>{title}</p>
        <p className="firstparagraph">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="buttonone"
        onClick={onDeleteImgeBtn}
        id="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default HistoryDetails
