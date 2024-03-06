import ActionItem from './Components/ActionItem';
import ActionSheetMain from './Components/ActionSheet';
import type { ActionItemProps, ActionSheetProps } from './Models';

type ElementBuilder<T> = React.MemoExoticComponent<(props: T) => JSX.Element>;

type ActionSheetTypes = ElementBuilder<ActionSheetProps> & {
  Item: ElementBuilder<ActionItemProps>;
};

const SheetComposition: any = ActionSheetMain;

SheetComposition.Item = ActionItem;

const ActionSheet = SheetComposition as ActionSheetTypes;

export { ActionSheet };
