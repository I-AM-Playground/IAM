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

type TitleProps<T extends React.ElementType> = Component<T>;

function Title({ children, className, ...restProps }: TitleProps<'p'>) {
  return (
    <p className={tw('text-xs text-dark-gray', className)} {...restProps}>
      {children}
    </p>
  );
}

IconButton.Icon = Icon;
IconButton.Title = Title;
