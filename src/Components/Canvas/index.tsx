/*
 * @Author       : 程哲林
 * @Date         : 2022-09-23 21:19:12
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-09-23 21:23:55
 * @FilePath     : /Poster/src/Components/Canvas/index.tsx
 * @Description  : 未添加文件描述
 */

import React from 'react';
import styles from './index.module.scss'

export interface CanvasProps {
  width: string;
  height: string;
}

const Canvas = React.memo(({ width, height }: CanvasProps): JSX.Element => {
  return (<canvas id='j-canvas' className={styles.canvas} width={width} height={height}></canvas>);
});

export default Canvas;
