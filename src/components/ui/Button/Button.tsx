import { ButtonStyle } from "./ButtonStyle";
export interface IButtonProps {
  name?: string;
  title?: string;
  id: string;
  onClick?: () => void;
}
export const Button = ({
  title = "Submit",
  name,
  id,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonStyle>
      <button data-testid={"button"} onClick={onClick} name={name} id={id}>
        {title}
      </button>
    </ButtonStyle>
  );
};
