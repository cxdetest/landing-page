import './footer.scss';

export const Footer = () => {
  return (
    <p className='footer'>
      &copy; {new Date().getFullYear()} Landing Page | All rights reserved
    </p>
  );
};
