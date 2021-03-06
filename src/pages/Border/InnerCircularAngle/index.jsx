import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Divider, Typography, Collapse, Space } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Coding from './codingText';

const { Paragraph } = Typography;
const { Panel } = Collapse;
const collapseTag = <FormattedMessage id="component.collapse.tag" />;

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2>
          <FormattedMessage id="context.border.inner-circular-border.title" />
        </h2>
        <Divider orientation="left" className={styles.keywords}>
          Keywords: border-radius & box-shadow & outline
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
          <Row align="middle">
            <Col span={1} />
            <Col span={6}>
              <div className={styles.figure1}></div>
            </Col>
            <Col span={12}>
              <Paragraph>
                <FormattedMessage id="context.border.inner-circular-border.paragraph.second" />
              </Paragraph>
              <Paragraph>
                <FormattedMessage id="context.border.inner-circular-border.paragraph.third" />
              </Paragraph>
              <Paragraph>
                <FormattedMessage id="context.border.inner-circular-border.paragraph.fourth" />
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={7} />
            <Col>
              <Collapse ghost>
                <Panel header={collapseTag}>
                  <SyntaxHighlighter
                    language="css"
                    style={stackoverflowLight}
                    className={styles.highlighterHidden}
                  >
                    {Coding.figure}
                  </SyntaxHighlighter>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row align="middle">
            <Col span={1} />
            <Col span={12}>
              <Paragraph>
                <FormattedMessage id="context.border.inner-circular-border.paragraph.fifth" />
              </Paragraph>
              <SyntaxHighlighter
                language="css"
                style={stackoverflowLight}
                className={styles.highlighterTarget}
              >
                {Coding.cssInnerCircular}
              </SyntaxHighlighter>
            </Col>
            <Col span={6}>
              <div className={styles.target}></div>
            </Col>
          </Row>
        </Space>
      </Card>
    </PageContainer>
  );
};
