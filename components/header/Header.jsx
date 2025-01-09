
import './header.css';
import { CompanyLogo } from '../companyLogo/CompanyLogo.jsx';

export const Header = () => {
  return (
    <header>
    <CompanyLogo companyName="First Co. and Friends" altText="logo-img-company"></CompanyLogo>
    
    <div className="name-box" >
    <h1 className="site-name">
        Name of the Site
    </h1>

    <p className="subtitle">
        Site subtitle
    </p> 
    </div>
 
  </header>
  );
};