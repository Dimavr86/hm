import './Nots.scss';
import Modal from 'antd/es/modal/Modal';
import NotsItem from './components/NotsItem/NotsItem';

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
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perferendis aperiam magnam eius sint?',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga ad voluptates commodi? Nesciunt cupiditate tempore, ullam molestiae quae voluptatibus excepturi illo eaque unde modi placeat eum, harum aperiam suscipit.',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perferendis aperiam magnam eius sint?',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga ad voluptates commodi? Nesciunt cupiditate tempore, ullam molestiae quae voluptatibus excepturi illo eaque unde modi placeat eum, harum aperiam suscipit.',
        read: true
    },
    {
        icon: '',
        date: '21.22.2022 22:00',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perferendis aperiam magnam eius sint?',
        read: true
    },
]

const Nots = ({
    open,
    close
}) => {

    const closeHandle = () => {
        close();
    }

    return (
        <Modal
            onCancel={closeHandle}
            open={open}
            className='modal Nots'
            >
            <div className="Nots__list">
                {
                    notsMock?.length > 0 ? (
                        notsMock.map((item, index) => (
                            <div className="Nots__item" key={index}>
                                <NotsItem
                                    read={item.read}
                                    icon={item.icon}
                                    date={item.date}
                                    text={item.text}
                                    />
                            </div>
                        ))
                    ) : null
                } 
            </div>
        </Modal>
    )
}

export default Nots;