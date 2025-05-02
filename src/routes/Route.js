import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

export const navLinks = [
  { path: '/', name: 'Home', element: <Home></Home> },
  { path: '/blog', name: 'Blog', element: <Blog></Blog> },
  { path: '/about', name: 'About', element: <About></About> },
  { path: '/contact', name: 'Contact', element: <Contact></Contact> },
];