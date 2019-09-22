import { Box as ReakitBox } from 'reakit';

import { InlineFlexThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineFlexProps = {
  overrides?: InlineFlexThemeConfig;
};
export type InlineFlexProps = BoxProps & LocalInlineFlexProps;

const useProps = createHook<InlineFlexProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.InlineFlex,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'InlineFlex' }
);

export const InlineFlex = createComponent<InlineFlexProps>(
  props => {
    const inlineFlexProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: inlineFlexProps
    });
  },
  {
    attach: { useProps },
    themeKey: 'InlineFlex'
  }
);