import styles from './index.less';
import React from 'react';
import {Layout, Menu} from "antd";
import {Link, useLocation} from "umi";
import {apps} from '@/qiankun';


const BasicLayout: React.FC<{}> = (props, ref) => {
  console.log('props', apps);
  const selectKey = '/' + useLocation().pathname.split('/')[1];

  return (<Layout className={styles.normal}>
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={[selectKey]}
        style={{lineHeight: '64px'} as any}
        items={[{name: '/'}, ...apps].map((app: any, index) => ({
          key: index,
          label: <Link to={`/${app.name}`}>{app.name}</Link>
        }))}
      >
      </Menu>
    </Layout.Header>
    <Layout.Content>{props.children}</Layout.Content>
  </Layout>);
};
export default BasicLayout;
