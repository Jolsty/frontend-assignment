export interface SearchFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  hasNextPage: boolean | undefined;
}
