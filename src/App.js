import './App.css'

import {Component} from 'react'

import HistoryDetails from './Components/HistoryDetails'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList1 = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', initialHistoryList: initialHistoryList1}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteImageDetails = id => {
    const {initialHistoryList} = this.state
    const DeleteRemainingData = initialHistoryList.filter(
      eachOne => eachOne.id !== id,
    )
    this.setState({initialHistoryList: DeleteRemainingData})
  }

  render() {
    const {searchInput, initialHistoryList} = this.state

    const filteredData = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let sai
    console.log(filteredData)
    if (filteredData.length === 0) {
      sai = (
        <div className="headingone">
          <p className="historyheadingshow">There is no history to show</p>
        </div>
      )
    } else {
      //   console.log('Hello')
      sai = (
        <ul className="unorderist">
          {filteredData.map(each => (
            <HistoryDetails
              each={each}
              key={each.id}
              onDeleteImageDetails={this.onDeleteImageDetails}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="backgroundone">
        <div className="overalbackground">
          <div className="firstcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="imagehtmlone"
              alt="app logo"
            />
            <div className="anothercontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="htmlimageone"
                alt="search"
              />
              <br />
              <input
                type="search"
                className="searchclass"
                placeholder="search history"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="card-itemcontainer">
            <div className="containerwhite">{sai}</div>
          </div>
        </div>
      </div>
    )
  }
}

// Replace your code here

export default App
