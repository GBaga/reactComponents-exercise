
import './main.css';
import { Hero } from '../hero/Hero';
import { ProfileCard } from '../profileCard/ProfileCard';
import { CallToAction } from '../callToAction/CallToAction';
import { FeatureBox } from '../featureBox/FeatureBox';
import { Testimonial } from '../testimonial/testimonial';

export const Main = () => {


  return (
    <main className="main-container">
      <Hero></Hero>

      <section className="cards-list">
        <ProfileCard avatar="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp" name="Emilia" bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rapella repellendus magni mollitia rem, et quisquam quidem nesciunt maxime eveniet. Sed!"></ProfileCard>
        <ProfileCard avatar="https://wallpapers.com/images/hd/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg" name="Anna" bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rapella!"></ProfileCard>
        <ProfileCard avatar="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp" name="Emilia" bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rapella repellendus magni mollitia rem, et quisquam quidem nesciunt maxime eveniet. Sed!"></ProfileCard>
        <ProfileCard avatar="https://wallpapers.com/images/hd/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg" name="Anna" bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rapella repellendus magni mollitia rem, iet. Sed!"></ProfileCard>
        <ProfileCard avatar="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp" name="Emilia" bio="Lorem ipsum dolor ed!"></ProfileCard>
     </section>

       <CallToAction></CallToAction>

       <section className="features-list">
        <FeatureBox url="https://cdn0.iconfinder.com/data/icons/scenes-1-1/1700/superhero_hero_woman_cape_action-512.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>
        <FeatureBox url="https://cdn2.iconfinder.com/data/icons/industry-flat-4/340/technician_man_industry_worker_repair_engineer_maintenance_service_fix-256.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>
        <FeatureBox url="https://cdn-icons-png.freepik.com/128/854/854878.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>
        <FeatureBox url="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/atom-256.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>
        <FeatureBox url="https://cdn2.iconfinder.com/data/icons/industry-flat-4/340/technician_man_industry_worker_repair_engineer_maintenance_service_fix-256.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>
        <FeatureBox url="https://cdn-icons-png.freepik.com/128/854/854878.png" title="Feature Title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."></FeatureBox>     
     </section>

     <section className="testimonial-list">
        <Testimonial></Testimonial>
        <Testimonial></Testimonial>
        <Testimonial></Testimonial>
     </section>
     
     </main>
  );
};


