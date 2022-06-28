import styles from './index.less';
import React from 'react';
import {Layout, Menu} from "antd";
import {Link, useLocation} from "umi";
import {apps} from '@/qiankun';
import {useToggle} from "ahooks";
import classnames from "classnames";

const SlaveMenu: React.FC<{ items?: any[], selectKey?: string, theme?: string }> = ({
                                                                                      items = [],
                                                                                      selectKey,
                                                                                      theme = 'dark'
                                                                                    }) => {
  let [show, {toggle}] = useToggle(false);

  return (<Layout.Header className={classnames(styles.slaveMenu, {
    [styles.hidden]: !show,
  })}>
    <div className={styles.container}>
      <div className={styles.logo}/>
      <Menu theme={theme as any}
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{lineHeight: '64px'} as any}
            items={items}/>
    </div>
    <button
      className={classnames(styles.toggle, {
        [styles.dark]: theme === 'dark',
      })}
      onClick={toggle}>
      {show ? '-' : '+'}
    </button>
  </Layout.Header>)
};


const BasicLayout: React.FC<{}> = (props, ref) => {
  const selectKey = '/' + useLocation().pathname.split('/')[1];
  let menus = [{name: 'Home'}, ...apps].map((app: any, index) => ({
    key: index,
    label: <Link to={`/${app.name}`}>{app.name}</Link>
  }));

  return (<Layout className={styles.normal}>
    <SlaveMenu items={menus} selectKey={selectKey}/>
    <Layout.Content>{props.children}</Layout.Content>
  </Layout>);
};
export default BasicLayout;
