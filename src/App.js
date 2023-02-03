import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes';

function App() {

  const { toggleMode } = useSelector(state => state);

  return (
    <div className={`${toggleMode ? "bg-[#112240]" : "bg-slate-100"}`}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
