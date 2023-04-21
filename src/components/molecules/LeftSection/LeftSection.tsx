import classes from './LeftSection.module.scss';
import { Logo } from '@atoms/Logo/Logo';
import heroImage from '@assets/images/hero-image.png';
export const LeftSection = () => {
  return (
    <div className={classes['left-section']}>
           <Logo></Logo>
           <div className={classes['philosophy-text']}>
                <h3>Our Philosophy is simple</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
           </div>
           <div className={classes['hero-image']}>
              <img src={ heroImage } alt="" />
           </div>
    </div>
  );
};

