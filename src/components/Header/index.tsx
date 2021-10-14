// 引用文件
import namedPng from '../../../public/slp-icon.png';

import styles from './index.module.scss';

function Page() {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src={namedPng} alt='' />
        </div>
        <div className={styles.login}>
          <a href=''>登录</a>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.bg}>
          <input type='text' />
          <button>搜索</button>
        </div>
      </div>
    </>
  );
}

export default Page;
