import { LazyWrapper } from '../modules';
const Home = LazyWrapper(import('./Home'));
const About = LazyWrapper(import('./About'));
const Contact = LazyWrapper(import('./Contact'));
export { Home, About, Contact };
