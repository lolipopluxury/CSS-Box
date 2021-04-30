import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less'

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2><FormattedMessage id="context.border.inner-circular-border.title"/></h2>
        <Row>        
          <Col span={12}>          
            <p>sakdaskldaskldaskldaskljdksaljdkaldjaksl</p>
          </Col>
          <Col span={12}>
            <div className={styles.target}>        
              I have a nice inner
            </div>
          </Col>
        </Row>      
      </Card>
    </PageContainer>
  );
};