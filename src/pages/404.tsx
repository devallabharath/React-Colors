import { useNavigate } from 'react-router-dom'
import '../styles/404.css'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="NotFound">
      <h1 className="number">404</h1>
      <span className="words">Not Found</span>
      <span>Check your url and try again....</span>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default ErrorPage
