import logo from '../assets/favicon.png';
import loginIcon from '../assets/avatar-user-36.svg';
import questionIcon from '../assets/help.svg'

const data = {
  left: {
    siteLogo: logo,
    siteName: 'Lazyatra',
    to: '/',
  },
  mid: [
    { id: 1, label: 'Packages' },
    { id: 2, label: 'Hotels' },
    { id: 3, label: 'About Us' },
    { id: 4, label: 'Testimonials' },
    { id: 5, label: 'Contact Us' },
  ],
  right: {
    questionIcon:questionIcon,
    loginIcon: loginIcon
  }
};

export default data;
