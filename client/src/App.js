import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]); //create a state variable with will contain the backend data that we get from the backend api

  //fetch the backend API (that appears on the browser)

  useEffect(() => {
    fetch("/api").then(
        //the useEffect will be basically the fetch API (we can use the relative route ("/api") instead to putting in localhost:5000, since we define this proxi in our package.json)
        response => response.json() //we fetch the api whatever response that we get from the api we are going to get the response in json
      ).then(
        data => { //get the date inside the json and set the data ti this backend data variable
        setBackendData(data);
      }
    )
  }, []); //pass in an empty array so that this only runs on the first render of the component

  //startup the front end
  return ( 
    <div>App Dizzitup.
    {/* it means we haven`t gotten the users yet or the api is currently being fetched */}
    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ):(
      backendData.users.map((user, i) =>(
        <p key={i}>{user}</p>
      ))
    )} 

    </div>
)

  }
export default App;
