import { twMerge as tw } from 'tailwind-merge';

type MainProps<T extends React.ElementType> = Component<T>;

export function Main({
  children,
  className,
  ...restProps
}: MainProps<'section'>) {
  return (
    <section
      className={tw('h-auto w-full px-10 pt-20', className)}
      {...restProps}
    >
      {children}
    </section>
  );
}
