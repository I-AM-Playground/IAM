import { twMerge as tw } from 'tailwind-merge';
import { Logo } from '../../components/Logo';

type LandingProps<T extends React.ElementType> = Component<T>;

export function Landing({
  children,
  className,
  ...restProps
}: LandingProps<'div'>) {
  return (
    <div
      className={tw(
        'relative flex h-screen w-screen items-center justify-center',
        className
      )}
      {...restProps}
    >
      <Logo>
        <Logo.Title>IAM(In All Musical)</Logo.Title>
        <Logo.SubTitle>뮤지컬 통합 스트리밍 서비스</Logo.SubTitle>
      </Logo>
      {children}
    </div>
  );
}
