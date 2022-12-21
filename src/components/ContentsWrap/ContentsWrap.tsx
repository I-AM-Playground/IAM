import { twMerge as tw } from 'tailwind-merge';
type ContentsWrapProps<T extends React.ElementType> = Component<T>;

export function ContentsWrap({
  children,
  className,
  ...restProps
}: ContentsWrapProps<'div'>) {
  return (
    <div
      className={tw(
        'flex w-full flex-row flex-wrap place-items-center gap-x-5 gap-y-20',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
