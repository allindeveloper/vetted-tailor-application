import pexelsphoto from "assets/images/pexelsphoto.png";
import { CardStyle } from "./CardStyle";

export interface ICardProps {
  title?: string;
  showImage?: boolean;
  customContent?: JSX.Element;
}
export const Card = ({
  title,
  showImage = true,
  customContent,
}: ICardProps) => {
  return (
    <CardStyle data-testid="card">
      <p className="title">{title}</p>
      {showImage && <img src={pexelsphoto} alt="Profile Picture" />}
      {customContent && customContent}
    </CardStyle>
  );
};
