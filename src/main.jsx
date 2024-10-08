import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import App from './App';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Home from './pages/Home';
import Search from './pages/Search';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[ 
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/movies",
        element:<Movies/>,
      },
      {
        path:"/movie/:id",
        element:<MovieInfo/>,
      },
      {
        path:"search/:searchText",
        element:<Search/>
      },
      {
        path:"*",
        element:<Navigate to="/" replace />
      }
    ],
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={appStore}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

/*
provide routing to <App>
 all the childrens go in outlet path
 outlet is inside <App> component
*/
