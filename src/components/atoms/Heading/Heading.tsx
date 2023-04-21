import classes from './Heading.module.scss';

export interface IHeading {
  children: React.ReactNode;
}

export const Heading = ({ children }: IHeading) => {
  return (
        <div className={classes['heading-container']}>
            { children }
        </div>
  );
};
