import './footer.css'
import { ContactInfo } from '../contactInfo/ContactInfro';

export const Footer = () => {

    let date = new Date().getFullYear();
  return <footer>
    <p id="copyright" className="copyright">
      All rights reserved &copy;  {date}
    </p>
    <ContactInfo></ContactInfo>
  </footer>
}