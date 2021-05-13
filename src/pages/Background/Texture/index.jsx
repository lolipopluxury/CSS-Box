import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card } from 'antd';

export default () => {
  return (
    <PageContainer>
      <Card>
        <h2>
          <FormattedMessage id="context.background.texture.title" />
        </h2>
      </Card>
    </PageContainer>
  );
};
