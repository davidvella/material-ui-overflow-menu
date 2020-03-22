import {IconButtonProps} from "@material-ui/core"

/**
 * {@docCategory CommandBar}
 */
export interface IOverFlowMenuProps extends React.HTMLAttributes<HTMLDivElement> {  
    /**
     * Items to render. ICommandBarItemProps extends IContextualMenuItem.
     */
    items: IOverMenuItemProps[];  
    /**
     * Props to be passed to overflow button.
     * If `menuProps` are passed through this prop, any items provided will be prepended to any
     * computed overflow items.
     */
    overflowButtonProps?: IconButtonProps;     
    /**
     * When true, items will be 'shifted' off the front of the array when reduced, and unshifted during grow.
     */
    shiftOnReduce?: boolean;  
    /**
     * Additional css class to apply to the command bar
     */
    className?: string;
    /**
     * Accessibility text to be read by the screen reader when the user's
     * focus enters the command bar. The screen reader will read this text
     * after reading information about the first focusable item in the command bar.
     */
    ariaLabel?: string;
  }

/**
 * IOverMenuItemProps extends IconButtonProps and adds a few MenuItem specific props.
 */
export interface IOverMenuItemProps extends IconButtonProps {
    /**
     * The Icon to be displayed in the button
     */
    icon: JSX.Element | React.ReactNode;
  }
  