import { HeaderListItem } from '../header-list-item/header-list-item';

const headerLinks = {
  'о нас': '#about-us',
  'для кого': '#for-who',
  кураторы: '#curators',
  программа: '#program',
  стоимость: '#price',
  записаться: '#sign-up',
  контакты: '#contacts',
};
export const HeaderList = () => {
  return (
    <ul>
      {Object.entries(headerLinks).map(([name, link]) => (
        <HeaderListItem key={name} name={name} link={link} />
      ))}
    </ul>
  );
};
