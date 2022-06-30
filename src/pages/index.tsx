import styles from './index.less';
import {Container} from '@/components';
import logo from '@/assets/logo.jpg';

export default function IndexPage() {
  return (
    <Container className={styles.container}>
      <img src={logo} className={styles.logo} alt={'logo'}/>
    </Container>
  );
}
