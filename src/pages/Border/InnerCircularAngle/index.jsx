import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Typography, Divider } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less'
import Editor from '@monaco-editor/react'

const cssText = 
`.target {
  width: 30em;
  height: 8em;
  margin: auto;
  background: tan;
  border-radius: .8em;
  padding: 1em;
  box-shadow: 0 0 0 .4em rgb(196, 124, 124);
  outline: .6em solid rgb(196, 124, 124);
}`

const { Text } = Typography

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2><FormattedMessage id="context.border.inner-circular-border.title"/></h2>
        <Divider orientation="left" className={styles.keywords}>border-radius & box-shadow & outline</Divider>      
        <Row>        
          <Col span={12}>          
            <Editor
              height="30vh"
              theme="light"
              defaultLanguage="css"
              defaultValue={cssText}          
            />
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