import _Divider from 'reakit/Divider';
import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import { DividerProps } from './Divider';

export const contentProperties = css`
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background: white;
    color: #c3c3c3;
    content: '${(props: any) => props.content}';
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: ${theme('fannypack.fontWeights.bold')};
    padding: 0.2rem 0.5rem;

    & {
      ${theme('fannypack.Divider.content')}
    }
  }
`;
export const verticalProperties = css`
  height: auto;

  & {
    ${theme('fannypack.Divider.vertical')};
  }
`;

export const Divider = styled(_Divider)<DividerProps>`
  opacity: 1;
  border-color: #e7e9ed;

  & {
    ${props => props.content && contentProperties};
    ${props => props.vertical && verticalProperties};
  }

  & {
    ${theme('fannypack.Divider.base')};
  }
`;

export default Divider;
