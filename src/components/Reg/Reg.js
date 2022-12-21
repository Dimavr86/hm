import './Reg.scss';
import {Modal} from 'antd';
import {Row, Col} from 'antd';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';
import google from '../../assets/auth-google.png';
import facebook from '../../assets/auth-fb.png';
import twitter from '../../assets/auth-twitter.png';

const Reg = ({
    open,
    close,
    toggle
}) => {
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')


    const closeHandle = () => close()

    const toggleAuth = () => {
        toggle()
        closeHandle()
    }


    return (
        <Modal
            className='modal Reg'
            width={500}
            open={open}
            onCancel={closeHandle}
            >
            <h2 className="modal__head page-title">
                Sign up
            </h2>
            <Col span={24}>
                <Row gutter={[10,10]}>
                    <Col span={24}>
                        <Input
                            placeholder={'E-mail'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                    </Col>
                    <Col span={24}>
                        <Input
                            placeholder={'Password'}
                            value={password1}
                            onChange={e => setPassword1(e.target.value)}
                            type={'password'}
                            />
                    </Col>
                    <Col span={24}>
                        <Input
                            placeholder={'Confirm password'}
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            type={'password'}
                            />
                    </Col>
                    <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            text={'Sign up'}
                            />
                    </Col>
                    <Col span={24}>
                        <div className="Reg__ex">
                            Do you have account? <span onClick={toggleAuth}>Log in</span> 
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="Reg__itgr">
                            <button className="Reg__itgr_item">
                                <img src={google} alt="" />
                            </button>
                            <button className="Reg__itgr_item">
                                <img src={facebook} alt="" />
                            </button>
                            <button className="Reg__itgr_item">
                                <img src={twitter} alt="" />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Modal>
    )
}

export default Reg;