import {
  Navigate,
} from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
type Props = {
  children: JSX.Element
}
export const ProtectedRoute = ({children}: Props) => {
  const [token] = useLocalStorage('token',"")
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
