import { twMerge as tw } from 'tailwind-merge';

type ButtonProps<T extends React.ElementType> = Component<T>;

export function Button({
  children,
  className,
  ...restProps
}: ButtonProps<'button'>) {
  return (
    <button
      type="button"
      className={tw(
        'flex h-[100px] w-full items-center justify-center rounded-lg bg-red font-line-seed-sans-kr text-xl font-bold text-white',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

type TitleProps<T extends React.ElementType> = Component<T>;

function Title({ children, className, ...restProps }: TitleProps<'p'>) {
  return (
    <p className={tw('w-full', className)} {...restProps}>
      {children}
    </p>
  );
}

Button.Title = Title;
