import classes from './Contacts.module.css'
import React, { Component } from 'react'
import Contact from './Contact/Contact'
import axios from '../axios/axios'
import PhoneList from './ContactsList/PhoneList'
import Loader from '../UI/Loader/Loader'

class Contacts extends Component {
  state = {
    loaderState: false,
    phoneData: [],
    currentContact: ''
  }

  getPhonelist = async (id) => {
    const url = id ? `/phonelist/${id}` : '/phonelist/'
    const responce = await axios.get(url)
    return responce.data
  }

  componentDidMount() {
    const phonelist = this.getPhonelist()
    phonelist.then(phoneData => {
      this.setState({
        loaderState: true,
        phoneData,
        currentContact: phoneData[0]
      })
    })
  }

  

  componentDidUpdate() {
  }

  render() {
  if(!this.state.loaderState) {
    return <Loader/>
  }
  return (
    <div className={classes.Contacts}>
      <div className={classes.ContactBox}>
        <PhoneList phoneData={this.state.phoneData} currentContact={this.state.currentContact}/>
        <Contact currentContact={this.state.currentContact} />
      </div>
    </div>
  )
}

}

export default Contacts