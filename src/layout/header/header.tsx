import { HeaderList } from '../../components/header-list/header-list';

export const Header = () => {
  return (
    <header>
      <div>
        <img src="../../assets/img/logo.PNG" alt="всё сейчас хорошо" />
      </div>
      <nav>
        <HeaderList />
      </nav>
      <div></div>
    </header>
  );
};
