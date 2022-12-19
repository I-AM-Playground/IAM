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
        'h-[100px] w-full rounded-lg bg-red font-line-seed-sans-kr text-xl font-bold text-white',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
