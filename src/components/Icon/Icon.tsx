import { twMerge as tw } from 'tailwind-merge';

type IconProps<T extends React.ElementType> = {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
} & Component<T>;

export function Icon({
  className,
  icon: Icon,
  ...restProps
}: IconProps<'svg'>) {
  return <Icon className={tw('text-dark-gray', className)} {...restProps} />;
}
