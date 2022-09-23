/*
 * @Author       : 程哲林
 * @Date         : 2022-09-23 20:07:29
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-09-23 21:33:29
 * @FilePath     : /Poster/src/App.tsx
 * @Description  : 未添加文件描述
 */
import React from 'react';
import styles from './App.module.scss';

import Canvas from './Components/Canvas'
import Panel from './Components/Panel'

console.log(window.fabric)

function App() {
  return <div className={styles.main}>
    <Panel />
    <Canvas 
      width='375'
      height='667'
    />
  </div>;
}

export default App;
