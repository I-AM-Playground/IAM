import { twMerge as tw } from 'tailwind-merge';
type SideNavProps<T extends React.ElementType> = Component<T>;

export function SideNav({
  children,
  className,
  ...restProps
}: SideNavProps<'section'>) {
  return (
    <section
      className={tw(
        'flex h-full w-[450px] flex-col items-center border-r border-light-gray pt-[60px]',
        className
      )}
      {...restProps}
    >
      {children}
    </section>
  );
}
