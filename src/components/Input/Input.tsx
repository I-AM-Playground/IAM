import { twMerge as tw } from 'tailwind-merge';

type InputProps<T extends React.ElementType> = Component<T>;

export function Input({
  children,
  className,
  ...restProps
}: InputProps<'input'>) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력해주세요! :)"
      className={tw(
        'h-20 w-full rounded-[40px] border border-light-gray px-10 font-line-seed-sans-kr text-xl text-light-gray',
        className
      )}
      {...restProps}
    >
      {children}
    </input>
  );
}
