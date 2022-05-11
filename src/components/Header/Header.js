
import headerLogo from '../../images/logo__header-footer.svg';

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a href="#services" className="header__link">Услуги</a>
                <a href="#apply" className="header__link">Заявка</a>
                <a href="#gallery" className="header__link">Галерея</a>
                <a href="#contacts" className="header__link">Контакты</a>
            </nav>
            <img className="header__logo" src={headerLogo} alt="logo" />
        </header>
    );
}

export default Header;
