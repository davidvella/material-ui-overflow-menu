import { IconButtonProps } from "@material-ui/core"

/**
 * {@docCategory CommandBar}
 */
export interface IOverSetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * An array of items to be rendered by your onRenderItem function in the primary content area
   */
  items?: IOverflowSetItemProps[];
  /**
   * Change item layout direction to vertical/stacked.
   * If role is set to `menubar`, `vertical={true}` will also add proper `aria-orientation`.
   * @defaultvalue false
   */
  vertical?: boolean;

  /**
   * Controls wether or not the overflow button is placed at the start or end of the items.
   * This gives a reveresed visual behavior but maintains correct keyboard navigation.
   * @defaultValue 'end'
   */
  overflowSide?: 'start' | 'end';

  /**
   * An array of items to be passed to overflow contextual menu
   */
  overflowItems?: IOverflowSetItemProps[];
  /**
  * Props to be passed to overflow button.
  * If `menuProps` are passed through this prop, any items provided will be prepended to any
  * computed overflow items.
  */
  overflowButtonProps?: IconButtonProps;
  /**
   * The role for the OverflowSet.
   * @defaultvalue 'group'
   */
  role?: string;
}

/**
 * IOverMenuItemProps extends IconButtonProps and adds a few MenuItem specific props.
 */
export interface IOverflowSetItemProps extends IconButtonProps {
  /**
   * The Icon to be displayed in the button
   */
  icon: JSX.Element | React.ReactNode;
}
