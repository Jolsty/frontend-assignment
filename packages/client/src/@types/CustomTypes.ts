export interface SearchInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  hasNextPage: boolean | undefined;
  searchParams: string;
}

export interface FilterInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterParams: string;
}

export interface LabelProps {
  text: string;
}

export interface Params {
  search: string;
  filter: string;
}
