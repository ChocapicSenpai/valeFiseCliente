import {
  Navigate,
  useLocation
} from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {config} from "../config"

type Props = {
  children: JSX.Element
}

export const ProtectedRoute = ({children}: Props) => {
  const location = useLocation()
  const [token] = useLocalStorage('token',"")
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
