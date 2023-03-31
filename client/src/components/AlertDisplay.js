import { useAppContext } from '../context/appContext'
import Alert from '@mui/material/Alert';

const AlertDisplay = () => {
  const { alertType, alertText } = useAppContext()
  return (
  <Alert variant="filled" severity={alertType}>
  {alertText}
</Alert>
  )
}

export default AlertDisplay
