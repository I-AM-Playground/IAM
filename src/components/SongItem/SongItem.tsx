import { twMerge as tw } from 'tailwind-merge';

type SongItemProps<T extends React.ElementType> = Component<T>;

export function SongItem({
  children,
  className,
  ...restProps
}: SongItemProps<'div'>) {
  return (
    <div className={tw('flex items-center', className)} {...restProps}>
      {children}
    </div>
  );
}

type InfoProps<T extends React.ElementType> = Component<T>;

function Info({ children, className, ...restProps }: InfoProps<'div'>) {
  return (
    <div className={tw('font-line-seed-sans-kr', className)} {...restProps}>
      {children}
    </div>
  );
}

type TitleProps<T extends React.ElementType> = Component<T>;

function Title({ children, className, ...restProps }: TitleProps<'p'>) {
  return (
    <p
      className={tw('text-base font-bold text-black', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

type SingerProps<T extends React.ElementType> = Component<T>;

function Singer({ children, className, ...restProps }: SingerProps<'p'>) {
  return (
    <p className={tw('text-sm text-light-gray', className)} {...restProps}>
      {children}
    </p>
  );
}

SongItem.Info = Info;
SongItem.Title = Title;
SongItem.Singer = Singer;
