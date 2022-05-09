import styles from './index.less';
import React from 'react';
import {Layout, Menu} from "antd";
import {Link, useLocation} from "umi";

const BasicLayout: React.FC<{}> = (props, ref) => {
  let {base}: any = props;
  const selectKey = '/' + useLocation().pathname.split('/')[1];

  return (<div className={styles.normal}>
    <Layout.Header>
      <div className={styles.logo}>{base?.name}</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={[selectKey]}
        style={{lineHeight: '64px'} as any}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        {base?.apps.map((app: any, index: number) => {
          if (index === 2) {
            return (
              <Menu.Item key={app.base}>
                <Link to="/app3/123">{app.name}</Link>
              </Menu.Item>
            );
          }
          return (
            <Menu.Item key={app.base}>
              <Link to={app.base}>{app.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Header>
    {props.children}
  </div>);
};
export default BasicLayout;
