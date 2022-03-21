import { InputStyle } from "./InputStyle";
export interface ICustomInputProps {
  name: string;
  labelText?: string;
  id: string;
  placeholder?: string;
  value?: string;
  startIcon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  onChange,
  name,
  startIcon,
  id,
  placeholder = "Search",
  labelText,
}: ICustomInputProps) => {
  return (
    <InputStyle>
      <p>
        <label htmlFor={name}>{labelText}</label>
      </p>
      <div>
        <img alt="search" title="Search" src={startIcon} />
        <input
          type="text"
          onChange={(e) => onChange?.(e)}
          id={id}
          name={name}
          placeholder={placeholder}
          data-testid={"searchInput"}
          aria-label="search-input"
        />
      </div>
    </InputStyle>
  );
};
