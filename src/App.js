import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Routes/Routes/Routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer position="top-center"/>
  
    </div>
  );
}

export default App;
