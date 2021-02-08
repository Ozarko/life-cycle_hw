import classes from "./ContactPerson.module.css"

const ContactPerson = ({contactPerson, currentContact}) => {
    const style = [classes.ContactPerson]

    if(currentContact.id === contactPerson.id) {
      style.push(classes.currentPerson)
    }

  return (
    <li className={style.join(' ')}>{contactPerson.firstName}</li> 
  )
}
export default ContactPerson