import React, { Component } from 'react';
import { Statistic, Row, Col, Divider } from 'antd';
import './Balance.scss';

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <Row gutter={16} justify="center">
                    <Col span={12}>
                        <Statistic title="Account Balance" value={112893} precision={2} flex="center" prefix="SGD$" />
                    </Col>
                </Row>
                <Row>
                    <Divider />
                </Row>
                <Row gutter={16} justify="center">
                    <Col span={12}>
                        <Statistic title="Realized Profit" value={1000} precision={2} prefix="SGD$" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Balance;