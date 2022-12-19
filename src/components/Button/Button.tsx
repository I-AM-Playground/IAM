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
        'w-full h-[100px] rounded-lg bg-red text-xl font-bold text-white',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
