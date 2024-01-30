import { ButtonProps } from '@app/types/ButtonProps';
import styled, { CSSProperties } from 'styled-components';
import {
  COLOR_DEFAULT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  SHARED_BUTTON_STYLES,
} from '../../../styles/styleImport';

export const Root = styled.div`
  padding: 5px;
`;

export const Buttons = styled.div`
  & > button {
    margin-right: 10px;
  }
`;

export const Button = styled.button<{ variant?: ButtonProps['variant'] }>(
  ({ variant }) => ({
    ...(SHARED_BUTTON_STYLES as CSSProperties),
    textAlign: 'center',
    color: '#333',
    ...((!variant || variant === 'default') && {
      backgroundColor: COLOR_DEFAULT,
    }),
    ...(variant === 'primary' && {
      backgroundColor: COLOR_PRIMARY,
      color: '#fff',
    }),
    ...(variant === 'secondary' && {
      backgroundColor: COLOR_SECONDARY,
      color: '#fff',
    }),
  }),
);
