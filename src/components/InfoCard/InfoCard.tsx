import { twMerge as tw } from 'tailwind-merge';

type InfoCardProps<T extends React.ElementType> = Component<T>;

export function InfoCard({
  children,
  className,
  ...restProps
}: InfoCardProps<'div'>) {
  return (
    <div
      className={tw('w-full font-line-seed-sans-kr ', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

type TitleProps<T extends React.ElementType> = Component<T>;

function Title({ children, className, ...restProps }: TitleProps<'p'>) {
  return (
    <p
      className={tw('pt-4 text-base font-bold text-dark-gray', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

type SubTitleProps<T extends React.ElementType> = Component<T>;

function SubTitle({ children, className, ...restProps }: SubTitleProps<'p'>) {
  return (
    <p className={tw('text-sm text-light-gray', className)} {...restProps}>
      {children}
    </p>
  );
}

InfoCard.Title = Title;
InfoCard.SubTitle = SubTitle;
