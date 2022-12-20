import { twMerge as tw } from 'tailwind-merge';
import { Icon } from '../Icon';

type IconButtonProps<T extends React.ElementType> = Component<T>;

export function IconButton({
  children,
  className,
  ...restProps
}: IconButtonProps<'button'>) {
  return (
    <button
      type="button"
      className={tw(
        'flex h-[72px] w-[72px] items-center justify-center',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

IconButton.Icon = Icon;
