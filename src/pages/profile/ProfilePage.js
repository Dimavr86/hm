import './ProfilePage.scss';
import Container from '../../components/Container/Container';
import {motion} from 'framer-motion';
import { Col, Row } from 'antd';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
const ProfilePage = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="ProfilePage page">
            <Container>
                <div className="ProfilePage__in">
                    <Row gutter={[20, 20]}>
                        <Col span={8}>
                            <div className="ProfilePage__panel panel">
                            <ProfileCard/>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div className="ProfilePage__panel panel">
                            <ProfileEdit/>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </motion.div>
    )
}

export default ProfilePage;