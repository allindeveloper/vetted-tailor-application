import { InputStyle } from "./InputStyle";
export interface ICustomInputProps {
  name: string;
  labelText?: string;
  id: string;
  placeholder?: string;
  value?: string;
  startIcon?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  onChange,
  name,
  startIcon,
  id,
  placeholder = "Search",
  labelText,
  type,
}: ICustomInputProps) => {
  return (
    <InputStyle>
      <p>
        <label htmlFor={name}>{labelText}</label>
      </p>
      <div>
        <img alt="search" title="Search" src={startIcon} />
        <input
          type={type}
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
