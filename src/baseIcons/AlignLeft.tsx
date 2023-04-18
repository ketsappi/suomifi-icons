
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconAlignLeft as AlignLeft } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconAlignLeft = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <AlignLeft
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${baseIconStyles}
`;

const IconAlignLeft = (props: BaseIconProps) => {
  return <StyledIconAlignLeft {...props}/>
}

IconAlignLeft.displayName = 'Icon';
export { IconAlignLeft };
