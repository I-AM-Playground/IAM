import { twMerge as tw } from 'tailwind-merge';

type FrameProps<T extends React.ElementType> = Component<T>;

export function Frame({
  children,
  className,
  ...restProps
}: FrameProps<'div'>) {
  return (
    <div
      className={tw('h-[360px] w-1/2 rounded-default bg-dark-gray', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}
