import { twMerge as tw } from 'tailwind-merge';

type SearchFormProps<T extends React.ElementType> = Component<T>;

export function SearchForm({
  children,
  className,
  ...restProps
}: SearchFormProps<'form'>) {
  return (
    <form className={tw('', className)} {...restProps}>
      {children}
    </form>
  );
}

type LabelProps<T extends React.ElementType> = Component<T>;

function Label({ children, className, ...restProps }: LabelProps<'label'>) {
  return (
    <label className={tw('', className)} {...restProps}>
      {children}
    </label>
  );
}

SearchForm.Label = Label;
