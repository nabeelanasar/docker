/*
* action index.tsx
*
* @author Anisha
* @version 1.0.0
*/

export { increment, decrement } from './PrintPage';
export { addPerson, removePerson } from './PersonPage';
export { initServiceDetailPage } from './ServiceDetail';
export { initBlogDetailPage, addComments } from './BlogDetail';
export { initCovidPage, setSelectedCountry, updatedCovidDetails } from './CovidPage';
export { initProjectPage, setSelectedProject, updateProjectDetails } from './ProjectPage';
export { initBlogsPage, setSelectedCategory, updateBlogPage } from './BlogsPage';
export { initServicesPage, setServiceSelectedCategory, updateServicePage } from './ServicesPage';
export { initProductPage, updateProductPage, setSelectedProductCategory, productSearch } from './ProductPage';
export { authenticate, signUp, logout } from './Auth';
