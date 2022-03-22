import pexelsphoto from "assets/images/pexelsphoto.png";
import { CardStyle } from "./CardStyle";

export interface ICardProps {
  title?: string;
  showImage?: boolean;
  customContent?: JSX.Element;
  customTopContent?: JSX.Element;
}
export const Card = ({
  title,
  showImage = true,
  customTopContent,
  customContent,
}: ICardProps) => {
  return (
    <CardStyle data-testid="card">
      <p className="title">{title}</p>
      {showImage && (
        <img data-testid="card-image" src={pexelsphoto} alt="Profile Picture" />
      )}
      {customTopContent && customTopContent}

      {customContent && customContent}
    </CardStyle>
  );
};
