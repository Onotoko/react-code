import React, { useEffect } from "react";
import { Row, Col, Card, Table, Tag } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import { connect , useDispatch, useSelector} from "react-redux";

import {withRouter} from 'react-router-dom';

import {  stats, getLastestUser } from '../../../../redux/actions/API'

const tableColumns = [
  {
    title: 'Account name',
    dataIndex: 'accountName',
    key: 'accountName'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Game Level',
    dataIndex: 'gameLevel',
    key: 'gameLevel',
  },
  {
    title: () => <div className="text-center">Status</div>,
    key: 'status',
    render: (_, record) => (
      <div className="text-center">
        <Tag className="mr-0" color={record.status === false ? 'cyan' : 'volcano'}>{record.status === false ? 'Active' : 'Blocked'}</Tag>
      </div>
    ),
  },
];

export const DefaultDashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.api.users);
  const statsData = []

  useEffect(() => {
      dispatch(getLastestUser());
    // dispatch(stats());
  }, []);
  return (
    <>  
      <Row gutter={16}>
      {
        statsData.map((elm, i) => (
          <Col span={6}  key={i}>
            <StatisticWidget 
              title={elm.title} 
              value={elm.value}
            />
          </Col>
        ))
      }
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card title="New Join Players" >
            <Table 
              className="no-border-last" 
              columns={tableColumns} 
              dataSource={userData} 
              // rowKey='id' 
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}


export default withRouter((DefaultDashboard));
