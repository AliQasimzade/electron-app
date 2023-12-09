import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <Outlet />
    </>

  )
}

export default App
