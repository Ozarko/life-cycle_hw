import React, { useEffect } from 'react'
import classes from './PhoneList.module.css'
import ContactPerson from './ContactPerson/ContactPerson'

function PhoneList ({phoneData, currentContact}) {
  return (
    <div className={classes.PhoneList}>
      <ul>
        {phoneData.map(contactPerson => <ContactPerson key={contactPerson.id} contactPerson={contactPerson} currentContact={currentContact}/>)}
      </ul>
    </div>
  )
}

export default PhoneList