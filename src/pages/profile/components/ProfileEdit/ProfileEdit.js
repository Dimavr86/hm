import './ProfileEdit.scss';
import { Row, Col } from 'antd';
import Input from '../../../../components/Input/Input';
import { useState } from 'react';
const ProfileEdit = () => {
    const [test, setTest] = useState('')
    return (
        <div className="ProfileEdit">
            <Row gutter={[20,20]}>
                <Col span={24}>
                    <Input value={test} onChange={e => setTest(e.target.value)} placeholder={'Test input'}/>
                </Col>
            </Row>  
        </div>
    )
}

export default ProfileEdit;