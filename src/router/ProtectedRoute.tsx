import {
  Navigate,
  useLocation
} from 'react-router-dom';
import {useFise} from "../context/FiseContext"

type Props = {
  children: JSX.Element
}

export const ProtectedRoute = ({children}: Props) => {
  const {data} = useFise()
  if (!data.token) {
    return <Navigate to="/valesfise/login" replace />;
  }

  return children;
};
