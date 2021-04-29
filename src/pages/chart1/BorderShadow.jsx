import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './border.less'


export default () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>    
        <h2>border shadow</h2>
        <h3></h3>
        <div className={styles.target}>        
            I have a nice inner        
        </div>
      </Card>
    </PageContainer>
  );
};

//<FormattedMessage id="context.welcome.title"/>