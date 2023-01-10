import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import About from '../../Pages/Homepage/About/About';
import AboutMe from '../../Pages/Homepage/About/AboutMe';
import Home from '../../Pages/Homepage/Home/Home';
import Myreviews from '../../Pages/Homepage/Reviews/MyReviews/Myreviews'
import Addreview from '../../Pages/Homepage/Reviews/MyReviews/Addreview'
import SingleService from '../../Pages/Homepage/Services/SingleService/SingleService'
import AddaService from '../../Pages/Homepage/Services/AddaService/AddaService';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Services from '../../Pages/Homepage/Services/Services';
import AllServices from '../../Pages/Homepage/Services/AllServices/AllServices';
import Progress from '../../Pages/Homepage/Progress/Progress';
import Testimonials from '../../Pages/Homepage/Testimonials/Testimonials';
import Contactme from '../../Contactme/Contactme';
import Contact from '../../Pages/Homepage/Contact/Contact';
import FeaturedProperties from '../../Pages/Homepage/FeaturedProperties/FeaturedProperties';
import AllProperties from '../../Pages/Homepage/AllProperties/AllProperties';
import Properties from '../../Pages/Homepage/AllProperties/Properties';
import SingleProperty from '../../Pages/Homepage/AllProperties/SingleProperty/SingleProperty';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://property-homie-rocco-server-roccorizz.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/progress',
                element: <Progress></Progress>
            },
            {
                path: '/testimonials',
                element: <Testimonials></Testimonials>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/addaservice',
                element: <PrivateRoute><AddaService></AddaService></PrivateRoute>
            },

            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/allservices',
                element: <AllServices />
            },
            {
                path: '/singleservice/:id',
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`https://property-homie-rocco-server-roccorizz.vercel.app/services/${params.id}`)
            },
            {
                path: '/featured-properties',
                element: <FeaturedProperties />

            },
            {
                path: '/allproperties',
                element: <AllProperties />

            },
            {
                path: '/properties',
                element: <Properties />

            },
            {
                path: '/singleproperty/:id',
                element: <SingleProperty />,
                loader: ({ params }) => fetch(`https://property-homie-rocco-server-roccorizz.vercel.app/allproperties/${params.id}`)
            },
            {
                path: '/contactme',
                element: <Contactme></Contactme>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/service-addreview/:id',
                element: <PrivateRoute><Addreview></Addreview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://property-homie-rocco-server-roccorizz.vercel.app/service/${params.id}`)
            }
        ]
    },
]);
export default router
