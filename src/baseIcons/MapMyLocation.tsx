
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMapMyLocation as MapMyLocation } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMapMyLocation = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MapMyLocation
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

const IconMapMyLocation = (props: BaseIconProps) => {
  return <StyledIconMapMyLocation {...props}/>
}

IconMapMyLocation.displayName = 'Icon';
export { IconMapMyLocation };
