import React from 'react';
import classnames from 'classnames';

import './index.scss';

export interface IMultiLineTextProps {
  /**
   * 文案内容
   * @default ''
   */
  children: string;
  /**
   * className
   */
  className?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export function Text(props: IMultiLineTextProps) {
  const { children, className, id, style } = props;
  return (
    <div className={classnames('orange-text', className)} id={id} style={style}>
      {children || ''}
    </div>
  );
}
