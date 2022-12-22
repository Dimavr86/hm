import './Report.scss';
import { Modal } from 'antd';
import {Row, Col} from 'antd';
import ReportItem from './ReportItem/ReportItem';
import { useState } from 'react';
import Button from '../Button/Button';

const reportItems = [
    {
        label: 'Spam',
        id: '1'
    },
    {
        label: 'Nudity or Pornography',
        id: '2'
    },
    {
        label: 'Inappropriate',
        id: '3'
    },
    {
        label: 'Graphic Violence',
        id: '4'
    },
    {
        label: 'Copyright',
        id: '5'
    },


]

const Report = ({open, close}) => {
    const [selected, setSelected] = useState('')

    const closeHandle = () => {
        close()
        setSelected('')
    }


    return (
        <Modal
            transitionName=''
            maskTransitionName=''
            width={500}
            onCancel={closeHandle}
            open={open}
            className='modal Report'
            >
            <h2 className="modal__head page-title">
                Report
            </h2>
            <Col span={24}>
                <Row gutter={[0,10]}>
                    {
                        reportItems?.length > 0 ? (
                            reportItems.map((item, index) => (
                                <Col span={24}>
                                    <ReportItem
                                    
                                    label={item.label}
                                    id={item.id}
                                    active={selected == item.id}
                                    onSelect={setSelected}
                                    />
                                </Col>
                            ))
                        ) : null
                    }
                    <Col span={24} style={{marginTop: '20px'}}>
                        <Row gutter={[10, 0]}>
                            <Col span={12}>
                                <Button onClick={closeHandle} style={{width: '100%'}} text={'Report'}/>
                            </Col>
                            <Col span={12}>
                                <Button onClick={closeHandle} style={{width: '100%'}} variant={'brown'} text={'Cancel'}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Modal>
    )
}

export default Report;