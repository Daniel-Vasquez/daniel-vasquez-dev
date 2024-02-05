import { Link } from 'react-router-dom'
import './styles/Btn.css'

function Btn({name, direction, color}) {
  return(
    <div>
      <Link className={`btn ${color}`} to={direction} >
        {name}
      </Link>
    </div>
  )
}

export default Btn