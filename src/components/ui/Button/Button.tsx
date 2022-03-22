import { useTheme } from "styled-components";
import { ButtonStyle } from "./ButtonStyle";
export interface IButtonProps {
  name?: string;
  title?: string;
  id: string;
  onClick?: () => void;
  type?: string;
}
export const Button = ({
  title = "Submit",
  name,
  id,
  onClick,
  type,
}: IButtonProps) => {
  const theme = useTheme();
  return (
    <ButtonStyle>
      <button
        data-testid={"button"}
        style={{
          backgroundColor: type === "default" ? theme.pallete.common.white : "",
          color: type === "default" ? theme.pallete.primary.main : "",
          border:
            type === "default"
              ? `1px solid ${theme.pallete.common.lightborder}`
              : "",
        }}
        onClick={onClick}
        name={name}
        id={id}
      >
        {title}
      </button>
    </ButtonStyle>
  );
};
