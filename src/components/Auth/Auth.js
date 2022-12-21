import { Modal } from "antd";
import './Auth.scss';
import {Col, Row} from "antd";
import Button from '../Button/Button';
import Input from "../Input/Input";
import { useState } from "react";
import google from '../../assets/auth-google.png';
import facebook from '../../assets/auth-fb.png';
import twitter from '../../assets/auth-twitter.png';


const Auth = ({open, close, toggle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const closeHandle = () => close()
    const toggleAuth = () => {
        toggle()
        closeHandle()
        
    }

    return (
        <Modal
            className="modal Auth"    
            open={open}
            onCancel={closeHandle}
            width={500}
            >
            <h2 className="modal__head page-title">Log in</h2>
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type={'password'}
                            />
                    </Col>
                    <Col span={24} style={{justifyContent: 'center', display: 'flex'}}>
                        <Button
                            text={'Log in'}
                            />
                    </Col>
                    <Col span={24}>
                        <div className="Auth__ex">
                            Don't have account? <span onClick={toggleAuth}>Sign up</span>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="Auth__itgr">
                            <button className="Auth__itgr_item">
                                <img src={google} alt="" />
                            </button>
                            <button className="Auth__itgr_item">
                                <img src={facebook} alt="" />
                            </button>
                            <button className="Auth__itgr_item">
                                <img src={twitter} alt="" />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Modal>
    )
}

export default Auth;