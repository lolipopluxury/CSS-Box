import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card, Row, Col, Divider, Typography, Space } from 'antd';
import styles from './index.less';

const { Paragraph } = Typography;

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2>
          <FormattedMessage id="context.background.texture.title" />
        </h2>
        <Divider orientation="left" className={styles.keywords}>
          Keywords: linear-gradient & background-size
        </Divider>
        <Space direction="vertical" size="small">
          <Row>
            <Col span={1} />
            <Col span={18}>
              <Paragraph>
                <blockquote>
                  <FormattedMessage id="context.border.inner-circular-border.paragraph.first" />
                </blockquote>
              </Paragraph>
            </Col>
          </Row>
        </Space>
      </Card>
    </PageContainer>
  );
};
