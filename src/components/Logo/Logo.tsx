import { twMerge as tw } from 'tailwind-merge';
import logo from './../../assets/logo.svg';

type LogoProps<T extends React.ElementType> = Component<T>;

export function Logo({ children, className, ...restProps }: LogoProps<'div'>) {
  return (
    <div
      className={tw(
        'w-[500px] font-line-seed-sans-kr font-bold leading-normal',
        className
      )}
      {...restProps}
    >
      <img
        src={logo}
        alt="In All Musical"
        className={tw('h-auto w-full', className)}
      />
      {children}
    </div>
  );
}

type TitleProps<T extends React.ElementType> = Component<T>;

function Title({ children, className, ...restProps }: TitleProps<'p'>) {
  return (
    <p
      className={tw('pt-3 text-center text-4xl text-black', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

type SubTitleProps<T extends React.ElementType> = Component<T>;

function SubTitle({ children, className, ...restProps }: SubTitleProps<'p'>) {
  return (
    <p
      className={tw('text-center text-3xl text-light-gray', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

Logo.Title = Title;
Logo.SubTitle = SubTitle;
