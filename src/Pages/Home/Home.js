import { useContext} from "react"
import {mentorStore} from "../../ContextAPI/Store"
<<<<<<< HEAD
import "./Home.scss"
=======
// import "./Home.css"
>>>>>>> f544ea2 (ss)
const Home = () => {
  const ctx=useContext(mentorStore)
  return (
    <div>{ctx.projectName}</div>
  )
}

export default Home