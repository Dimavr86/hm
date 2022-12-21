import './NotsMenu.scss';
import NotsMenuItem from './components/NotsMenuItem/NotsMenuItem';
import Button from '../Button/Button';
const notsMock = [
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga ad voluptates commodi? Nesciunt cupiditate tempore, ullam molestiae quae voluptatibus excepturi illo eaque unde modi placeat eum, harum aperiam suscipit.'
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perferendis aperiam magnam eius sint?'
    },
]

const NotsMenu = ({openNots}) => {
    return (
        <div className="NotsMenu">
            <div className="NotsMenu__list">
                {
                    notsMock?.length > 0 ? (
                        notsMock.map((item, index) => (
                            <div className="NotsMenu__item" key={index}>
                                <NotsMenuItem
                                    openNots={openNots}
                                    text={item.text}
                                    icon={item.icon}
                                    date={item.date}
                                    />
                            </div>
                        ))
                    ) : null
                }
            </div>
            <div className="NotsMenu__action">
                <Button
                    onClick={openNots}
                    text={'show more'}
                    />
            </div>
        </div>
    )
}

export default NotsMenu;