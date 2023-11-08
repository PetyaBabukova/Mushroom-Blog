import Profile from '../Profile/Profile';
import BlogDishes from '../BlogDishes/BlogDishes';
import styles from './MainSection.module.css';
import OurTeam from '../OurTeam/OurTeam';
import ChefProfile from '../ChefProfile/ChefProfile';

function MainSection({
}) {
  return (
    <>
      {/* <h2 className={styles.ourTeamTitle}>Our chefs</h2> */}
      {/* <h2 className={styles.ourTeamTitle}>Dishes</h2> */}
    <div className={styles.mainContainer}>
      <Profile  />
      {/* <BlogDishes /> */}
      {/* <OurTeam /> */}
      <ChefProfile />
      
    </div>
    </>
  );
}

export default MainSection;
