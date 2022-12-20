import { twMerge as tw } from 'tailwind-merge';

type NavBarProps<T extends React.ElementType> = Component<T>;

export function NavBar({
  children,
  className,
  ...restProps
}: NavBarProps<'div'>) {
  return (
    <div
      className={tw(
        'flex place-content-between items-center px-[30px] font-line-seed-sans-kr',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
