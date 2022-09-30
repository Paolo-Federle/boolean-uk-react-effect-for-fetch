import { useEffect, useState } from "react"

function UsersSection() {

  const [userData, setuserData] = useState([]);

  // https://randomuser.me/api/?results=5
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(resp => resp.json())
      .then(data => {
        console.log("my data is", data)
        setuserData(data.results)
      }
      )
  }, [])

  function setGenderColor(userItem){
    if (userItem.gender === "female") {
           return "bg-pink" 
    } else {
      return "bg-blue"
    }
  }

  console.log("my userData is", userData)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((userItem, index) => {
            return (
              <li key={index} className={setGenderColor(userItem)}>
                <img
                  src={userItem.picture.medium}
                  alt={`${userItem.name.first} ${userItem.name.last}`}
                />
                <h3>{userItem.name.title} {userItem.name.first} {userItem.name.last}</h3>
                <p>Email: {userItem.email}</p>
              </li>)
          })}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
