import { InputStyle } from "./InputStyle";
export interface ICustomInputProps {
  name: string;
  labelText?: string;
  id: string;
  placeholder?: string;
  value?: string;
  startIcon?: string;
  type?: string;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  onChange,
  disabled,
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
        <img alt="startIcon" title="Search" src={startIcon} />
        <input
          type={type}
          onChange={(e) => onChange?.(e)}
          id={id}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          data-testid={"searchInput"}
          aria-label="search-input"
        />
      </div>
    </InputStyle>
  );
};
