import { twMerge as tw } from 'tailwind-merge';
type PlayNavProps<T extends React.ElementType> = Component<T>;

export function PlayNav({
  children,
  className,
  ...restProps
}: PlayNavProps<'div'>) {
  return (
    <div className={tw('flex items-center', className)} {...restProps}>
      {children}
    </div>
  );
}
