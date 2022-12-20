import { twMerge as tw } from 'tailwind-merge';
type SongCardProps<T extends React.ElementType> = Component<T>;

export function SongCard({
  children,
  className,
  ...restProps
}: SongCardProps<'div'>) {
  return (
    <div
      className={tw(
        'flex h-[100px] place-content-between items-center border-b border-light-gray px-8',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
