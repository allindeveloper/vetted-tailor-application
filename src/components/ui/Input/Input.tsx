import search from "assets/svg/search.svg";
import { InputStyle } from "./InputStyle";
export interface ICustomInputProps {
  name: string;
  labelText?: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  onChange,
  name,
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
        <input
          type="text"
          onChange={(e) => onChange?.(e)}
          id={id}
          name={name}
          placeholder={placeholder}
          data-testid={"searchInput"}
          aria-label="search-input"
        />
        <img alt="search" title="Search" src={search} />
      </div>
    </InputStyle>
  );
};
