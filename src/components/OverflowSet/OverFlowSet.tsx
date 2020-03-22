import { IOverSetProps, IOverflowSetItemProps } from "./OverflowSet.types";
import {
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  Box,
  Menu,
  MenuItem
} from "@material-ui/core";
import React, { FC } from "react";
import clsx from "clsx";
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/hooks";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    horizontal: {
      flexDirection: "row"
    },
    horizontalReverse: {
      flexDirection: "row-reverse"
    },
    vertical: {
      flexDirection: "column"
    },
    verticalReverse: {
      flexDirection: "column-reverse"
    }
  })
);

/**
 * The OverflowSet is a flexible container component that is useful for displaying a primary set of content with additional content in an overflow callout. 
 */
export const OverflowSet: FC<IOverSetProps> = props => {
  const classes = useStyles();

  const {
    items = [],
    overflowItems = [],
    vertical = false,
    overflowSide = "end",
    overflowButtonProps,
    ...rest
  } = props;

  const popupState = usePopupState({
    variant: "popover",
    popupId: "overflowButton"
  });

  const onRenderItems = (items: IOverflowSetItemProps[]) => {
    return items.map((item, i) => {
      const { icon, ...iconRest } = item;
      return (
        <Box>
          <IconButton {...iconRest}>
            {icon}
          </IconButton>
        </Box>
      );
    });
  };

  const onRenderOverflowButtonWrapper = (items: IOverflowSetItemProps[]) => {
    return (
      <Box>
        <IconButton {...overflowButtonProps} {...bindTrigger(popupState)}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          {...bindMenu(popupState)}
        >
          {items.map((item, i) => {
            const { icon, ...iconRest } = item;
            return (
              <MenuItem>
                <IconButton {...iconRest}>
                  {icon}
                </IconButton>
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    );
  };

  const showOverflow = overflowItems && overflowItems.length > 0;

  return (
    <Box
      display="flex"
      className={clsx({
        [classes.horizontal]: !vertical && overflowSide === "end",
        [classes.horizontalReverse]: !vertical && overflowSide === "start",
        [classes.vertical]: vertical && overflowSide === "end",
        [classes.verticalReverse]: vertical && overflowSide === "start"
      })}
      {...rest}
    >
      {items && onRenderItems(items)}
      {showOverflow && onRenderOverflowButtonWrapper(overflowItems!)}
    </Box>
  );
};
