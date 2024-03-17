
import data from "../data.json"
import styles from "./Certification.css"
export const Certification = () => {

    return (
        <div>
            <h1>User</h1>
         <h1>techinal</h1>
         {
            data.Certification.map((user)=> (
                <div>
                <h4>{user.name}</h4>
                <p>{user.platform}</p>
                <img className="cetification-image" src={user.link}></img>
                </div>
            ))
         }
        </div>
    )
}