import { twMerge as tw } from 'tailwind-merge';
type PlayBarProps<T extends React.ElementType> = Component<T>;

export function PlayBar({
  children,
  className,
  ...restProps
}: PlayBarProps<'div'>) {
  return (
    <div
      className={tw(
        'relative flex h-[100px] place-content-between items-center bg-dark-gray px-10',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
