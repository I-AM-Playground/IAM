import { twMerge as tw } from 'tailwind-merge';

type NavListProps<T extends React.ElementType> = Component<T>;

export function NavList({
  children,
  className,
  ...restProps
}: NavListProps<'div'>) {
  return (
    <div
      className={tw(
        'w-full border-t border-r border-light-gray py-5',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
