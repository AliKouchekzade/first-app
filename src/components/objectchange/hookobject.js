import { useState } from "react";

const HooksObject = () => {

    const [user,setUser] = useState({firstName : "",lastName : ""});

    const firstNameHandler = (e) => {
        setUser({...user,firstName : e.target.value});
        /*setUser(preState => {
            return {firstName : e.target.value , lastName: preState.lastName}
        });*/
    }
    const lastNameHandler = (e) => {
        setUser({...user,lastName : e.target.value});
        /*setUser(preState => {
            return {lastName : e.target.value , firstName: preState.firstName}
        });*/
    }

    return ( <div>
        <form>
            <input type="text" value = {user.firstName} onChange = {firstNameHandler}></input>
            <input type="text" value = {user.lastName} onChange = {lastNameHandler}></input>
            <p>my fistName is :  {user.firstName}</p>
            <p> my Last Name is : {user.lastName}</p>
        </form>
    </div> );
}
 
export default HooksObject ;