import './ProfileEdit.scss';
import { Row, Col } from 'antd';
import Input from '../../../../components/Input/Input';
import { useState } from 'react';
import Text from '../../../../components/Text/Text';


const ProfileEdit = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [site, setSite] = useState('')
    const [text, setText] = useState('')
    const [pass, setPass] = useState('')
    const [conf, setConf] = useState('')

    return (
        <div className="ProfileEdit">
            <Row gutter={[20,20]}>
                <Col span={24}>
                    <Input value={name} onChange={e => setName(e.target.value)} placeholder={'Name'}/>
                </Col>
                <Col span={24}>
                    <Input value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email'}/>
                </Col>
                <Col span={24}>
                    <Input value={site} onChange={e => setSite(e.target.value)} placeholder={'Your site'}/>
                </Col>
                <Col span={24}>
                    <Text value={text} onChange={e => setText(e.target.value)} placeholder={'About'} height={200}/>
                </Col>
                <Col span={24}>
                    <Input 
                        value={pass} 
                        onChange={e => setPass(e.target.value)} 
                        placeholder={'New password'} 
                        type={'password'}
                        />
                </Col>
                <Col span={24}>
                    <Input 
                        value={conf} 
                        onChange={e => setConf(e.target.value)} 
                        placeholder={'Confirm password'} 
                        type={'password'}
                        />
                </Col>
            </Row>  
        </div>
    )
}

export default ProfileEdit;