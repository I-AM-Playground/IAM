import { twMerge as tw } from 'tailwind-merge';

type FrameProps<T extends React.ElementType> = Component<T>;

export function Frame({
  children,
  className,
  ...restProps
}: FrameProps<'div'>) {
  return (
    <div
      className={tw(
        'flex h-full w-full items-center justify-center rounded-default bg-dark-gray',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
