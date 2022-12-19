import { twMerge as tw } from 'tailwind-merge';

type NavItemProps<T extends React.ElementType> = Component<T>;

export function NavItem({
  children,
  className,
  ...restProps
}: NavItemProps<'div'>) {
  return (
    <div
      className={tw(
        'flex h-[60px] w-full items-center justify-center border-r border-light-gray font-line-seed-sans-kr text-lg font-bold text-black',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
