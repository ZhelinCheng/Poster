/*
 * @Author       : 程哲林
 * @Date         : 2022-09-23 21:25:28
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-09-23 21:55:34
 * @FilePath     : /Poster/src/Components/Panel/index.tsx
 * @Description  : 未添加文件描述
 */
import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const Panel = React.memo((): JSX.Element => {
  return (
    <div className={styles.toolbar}>
      <div className={styles['toolbar-left']}>
        <div className={styles.bd}>
          <div className={styles.item}>
            <button className={cx(styles.btn, 'iconfont', 'icon-text')}></button>
          </div>
          <div className={styles.item}>
            <button className={cx(styles.btn, 'iconfont', 'icon-shape')}></button>
          </div>
          <div className={cx(styles.item, styles['line-horizontal'])}></div>
          <div className={styles.item}>
            <button className={cx(styles.btn, 'iconfont', 'icon-image')}></button>
          </div>
        </div>
      </div>
      <div className={styles['toolbar-top']}></div>
    </div>
  );
});

export default Panel;
