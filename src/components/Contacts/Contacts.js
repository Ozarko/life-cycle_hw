import classes from "./Contacts.module.css";
import React, { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import axios from "../axios/axios";
import PhoneList from "./ContactsList/PhoneList";

// class Contacts extends Component {
//   state = {
//     loaderState: false,
//     phoneData: [],
//     currentContact: ''
//   }

//   getPhonelist = async (id) => {
//     const url = id ? `/phonelist/${id}` : '/phonelist/'
//     const responce = await axios.get(url)
//     return responce.data
//   }

//   componentDidMount() {
//     const phonelist = this.getPhonelist()
//     console.log(phonelist)
//     phonelist.then(phoneData => {
//       this.setState({
//         loaderState: true,
//         phoneData,
//         currentContact: phoneData[0]
//       })
//     })
//   }

//   componentDidUpdate() {
//   }

//   render() {
//   if(!this.state.loaderState) {
//     return <Loader/>
//   }
//   return (
//     <div className={classes.Contacts}>
//       <div className={classes.ContactBox}>
//         <PhoneList setCurrentContact={this.setCurrentContact} phoneData={this.state.phoneData} currentContact={this.state.currentContact}/>
//         <Contact currentContact={this.state.currentContact} />
//       </div>
//     </div>
//   )
// }

// }

function Contacts() {
  const [loader, setLoader] = useState(false);
  const [phoneList, setPhoneList] = useState([]);
  const [currentContact, setCurrentContact] = useState({});

  const getPhonelist = async (id) => {
    const url = id ? `/phonelist/${id}` : "/phonelist/";
    const responce = await axios.get(url);
    return responce.data;
  };


  useEffect(()=> {
    async function getPhonelistData() {
      setPhoneList(await getPhonelist())
      setLoader(true)
    }
    getPhonelistData()
  },[])

  return (
    <div className={classes.Contacts}>
      <div className={classes.ContactBox}>
        <PhoneList phoneList={phoneList} currentContact={currentContact} />
        <Contact/>
      </div>
    </div>
  );
}

export default Contacts;
