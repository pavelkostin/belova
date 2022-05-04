import vk from '../../images/images/vk-social-network-logo_icon-icons.com_73339.svg';
import headerLogo from '../../images/logo__header-footer.svg';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__info'>

                <div className='header__contacts' id='contacts'>
                    <p className='header__phone'><a className='header__phone' href='tel:+79167024421'>+7(916)7024421</a></p>
                    <p className='header__phone'>be1977@yandex.ru</p>

                    <a
                        rel='noreferrer'
                        href='https://vk.com/id380374293'
                        target='_blank'
                    >
                        <img
                            className='header__social header__social_footer'
                            src={vk}
                            alt='vk'
                        />
                    </a>
                    <iframe
                        className='iframe-map'
                        title='location'
                        src='https://yandex.ru/map-widget/v1/?um=constructor%3A4f9823d708fdc00a67a812e7f2d8ffb7187e770174e92f216c54bb7dcc933877&amp;source=constructor'
                        /*                     minwidth='320'
                                            maxwidth='520'
                                            height='720' */
                        frameBorder='0'>
                    </iframe>
                </div>

            </div>

            <div className='footer__container'>
                <p className='footer__caption'>© Швейная мастерская «BELOVA» 2022</p>
                <img
                    className='header__logo'
                    src={headerLogo}
                    alt='logo'
                />
            </div>



        </section>
    )
}

export default Footer;
