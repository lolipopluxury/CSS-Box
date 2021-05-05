import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Divider } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const cssText = `.target {
  width: 30em;
  height: 8em;
  margin: auto;
  background: tan;
  border-radius: .8em;
  padding: 1em;
  box-shadow: 0 0 0 .4em rgb(196, 124, 124);
  outline: .6em solid rgb(196, 124, 124);
}`;

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2>
          <FormattedMessage id="context.border.inner-circular-border.title" />
        </h2>
        <Divider orientation="left" className={styles.keywords}>
          border-radius & box-shadow & outline
        </Divider>
        <Row>
          <Col span={16}>
            <SyntaxHighlighter
              language="css"
              style={stackoverflowLight}
              className={styles.highlighter}
            >
              {cssText}
            </SyntaxHighlighter>
          </Col>
          <Col span={8}>
            <div className={styles.target}>I have a nice inner</div>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};
