import './Header.scss';
import Container from '../Container/Container';
import { Row, Col } from 'antd';
import MainSearch from '../MainSearch/MainSearch';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import {BsFillChatDotsFill, BsPlusLg} from 'react-icons/bs';
import Avatar from '../Avatar/Avatar';



const Header = () => {
    return (
        <header className="Header">
            <Container>
                <div className="Header__in">
                    <div className="Header__logo Header__part">
                        
                    </div>
                    <div className="Header__action Header__part">
                        <div className="Header__action_item">
                            <Button
                                text={'Главная'}
                                />
                        </div>
                        <div className="Header__action_item">
                            <Button
                                variant={'brown'}
                                text={'Создать'}
                                after={<BsPlusLg/>}
                                tooltip={'Возможность создавать товары скоро появиться'}
                                />
                        </div>
                    </div>
                    <div className="Header__search Header__part">
                        <MainSearch/>
                    </div>
                    <div className="Header__action Header__part">
                        <div className="Header__action_item">
                            <IconButton
                                badge={10}
                                icon={<BsFillChatDotsFill/>}
                                size={'30px'}
                                variant={'transparent'}
                                color={'var(--blue)'}
                                />
                        </div>
                        <div className="Header__action_item">
                            <Avatar active={true}/>
                        </div>
                    </div>

                </div>
            </Container>
        </header>
    )
}


export default Header;